import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";

interface BulletPointsProps {
  points: string[];
  className?: string;
  style?: CSSProperties;
}

const BULLET_POINT_ROLE = "bulletPoint";

export const BulletPoints: React.FC<BulletPointsProps> = ({
  points,
  className,
  style,
}: BulletPointsProps) => {
  return points.length > 0 ? (
    <ul className={className} style={style}>
      {points.map((point, index) => (
        <li key={index} role={BULLET_POINT_ROLE}>
          <Typography>{point}</Typography>
        </li>
      ))}
    </ul>
  ) : null;
};

export { BULLET_POINT_ROLE };
export type { BulletPointsProps };
