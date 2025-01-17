import { ActivityType, IntensityLevel } from "./activity-model";

export interface ActivityFilter {
    activityType?: ActivityType;
    startDate?: Date;
    endDate?: Date;
    minDuration?: number;
    maxDuration?: number;
    minIntensity?: IntensityLevel;
    maxIntensity?: IntensityLevel;
    minCalories?: number;
    maxCalories?: number;
    sortBy?: string;
    sortOrder?: string;
  }
  