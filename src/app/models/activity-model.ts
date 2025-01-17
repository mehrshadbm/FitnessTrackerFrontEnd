export interface Activity {
    id: string;
    activityType: ActivityType;
    duration: number;
    caloriesBurned: number;
    date: Date;
    intensity: IntensityLevel;
  }

  export enum IntensityLevel {
    Easy = 1,
    Moderate = 2,
    Hard = 3,
    AllOut = 4,
  }
  
  export enum ActivityType {
    Running = 1,
    Cycling = 2,
    Lifting = 3,
    Walking = 4,
    Swimming = 5,
  }