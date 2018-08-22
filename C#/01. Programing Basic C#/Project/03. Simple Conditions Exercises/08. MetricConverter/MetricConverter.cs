using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.MetricConverter
{
    class MetricConverter
    {
        static void Main(string[] args)
        {
            double number = double.Parse(Console.ReadLine());
            string sorceMetric = Console.ReadLine();
            string destMetric = Console.ReadLine();

            double baseMetricValue = number;

            if (sorceMetric == "m")
            {
                baseMetricValue = baseMetricValue / 1;
            }
            else if (sorceMetric == "mm")
            {
                baseMetricValue = baseMetricValue / 1000;
            }
            else if (sorceMetric == "cm")
            {
                baseMetricValue = baseMetricValue / 100;
            }
            else if (sorceMetric == "mi")
            {
                baseMetricValue = baseMetricValue / 0.000621371192;
            }
            else if (sorceMetric == "in")
            {
                baseMetricValue = baseMetricValue / 39.3700787;
            }
            else if (sorceMetric == "km")
            {
                baseMetricValue = baseMetricValue / 0.001;
            }
            else if (sorceMetric == "ft")
            {
                baseMetricValue = baseMetricValue / 3.2808399;
            }
            else if (sorceMetric == "yd")
            {
                baseMetricValue = baseMetricValue / 1.0936133;
            }


            if (destMetric == "m")
            {
                baseMetricValue = baseMetricValue * 1;
            }
            else if (destMetric == "mm")
            {
                baseMetricValue = baseMetricValue * 1000;
            }
            else if (destMetric == "cm")
            {
                baseMetricValue = baseMetricValue * 100;
            }
            else if (destMetric == "mi")
            {
                baseMetricValue = baseMetricValue * 0.000621371192;
            }
            else if (destMetric == "in")
            {
                baseMetricValue = baseMetricValue * 39.3700787;
            }
            else if (destMetric == "km")
            {
                baseMetricValue = baseMetricValue * 0.001;
            }
            else if (destMetric == "ft")
            {
                baseMetricValue = baseMetricValue * 3.2808399;
            }
            else if (destMetric == "yd")
            {
                baseMetricValue = baseMetricValue * 1.0936133;
            }

            Console.Write(baseMetricValue);
            Console.WriteLine(" " + destMetric);
        }
    }
}
