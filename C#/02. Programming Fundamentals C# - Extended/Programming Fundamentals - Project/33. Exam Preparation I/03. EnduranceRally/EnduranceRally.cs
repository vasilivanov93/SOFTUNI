using System;
using System.Linq;

namespace _03.EnduranceRally
{
   public class EnduranceRally
    {
       public static void Main(string[] args)
        {
            string[] participants = Console.ReadLine().Split(' ');
            double[] trackIndexes = Console.ReadLine().Split(' ')
                                                      .Select(double.Parse).ToArray();
            double[] checkpointIndexes = Console.ReadLine().Split(' ')
                                                      .Select(double.Parse).ToArray();

            foreach (var participant in participants)
            {
                double fuel = participant[0];

                for (int currentTrackIndexes = 0; currentTrackIndexes <= trackIndexes.Length; currentTrackIndexes++)
                {
                    bool outOfFuel = fuel <= 0;
                    bool reachedEndOfTrack = currentTrackIndexes == trackIndexes.Length;
                    bool raceEnded = outOfFuel || reachedEndOfTrack;

                    if (raceEnded)
                    {
                        if (outOfFuel)
                        {
                            Console.WriteLine($"{participant} - reached {currentTrackIndexes - 1}");
                        }
                        else if (reachedEndOfTrack)
                        {
                            Console.WriteLine($"{participant} - fuel left {fuel:F2}");
                        }

                        break;
                    }

                    double fuelAtCheckpoint = trackIndexes[currentTrackIndexes];

                    bool isCheckpoint = checkpointIndexes.Contains(currentTrackIndexes);

                    if (isCheckpoint)
                    {
                        fuel += fuelAtCheckpoint;
                    }
                    else
                    {
                        fuel -= fuelAtCheckpoint;
                    }
                }
            }
        }
    }
}