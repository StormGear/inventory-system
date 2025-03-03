import { useGetDashboardMetricsQuery } from "@/state/api";
import { CloudAlert, TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SkeletonCard } from "../(components)/Skeleton";

const CardPurchaseSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-4 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl overflow-auto">
              {/* HEADER */}
              <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>
      {  isLoading ? (
                      <>
                     
               {
                  Array.from({ length: 5}, (_, index) => (
                     <SkeletonCard key={index} />
                  ))
               }
                      </>
      ) : (
        <>
        {
                    isError ? (
                        <div className='flex flex-col items-center justify-center h-full'>
                            <CloudAlert  className='w-10 h-10 my-10 text-red-500' />
                            <div className='text-lg font-bold text-red-500'>Error fetching data</div>
                        </div>
                    ): <div>
                    {/* BODY HEADER */}
                    <div className="mb-4 mt-7 px-7">
                      <p className="text-xs text-gray-400">Purchased</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold">
                          {lastDataPoint
                            ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                            : "0"}
                        </p>
                        {lastDataPoint && (
                          <p
                            className={`text-sm ${
                              lastDataPoint.changePercentage! >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            } flex ml-3`}
                          >
                            {lastDataPoint.changePercentage! >= 0 ? (
                              <TrendingUp className="w-5 h-5 mr-1" />
                            ) : (
                              <TrendingDown className="w-5 h-5 mr-1" />
                            )}
                            {Math.abs(lastDataPoint.changePercentage!)}%
                          </p>
                        )}
                      </div>
                    </div>
                    {/* CHART */}
                    <ResponsiveContainer width="100%" height={200} className="p-2">
                      <AreaChart
                        data={purchaseData}
                        margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
                      >
                        <XAxis dataKey="date" tick={false} axisLine={false} />
                        <YAxis tickLine={false} tick={false} axisLine={false} />
                        <Tooltip
                          formatter={(value: number) => [
                            `GH₵${value.toLocaleString("en")}`,
                          ]}
                          labelFormatter={(label) => {
                            const date = new Date(label);
                            return date.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            });
                          }}
                        />
                        <Area
                          type="linear"
                          dataKey="totalPurchased"
                          stroke="#8884d8"
                          fill="#8884d8"
                          dot={true}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                }

            {/* BODY */}
          
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;