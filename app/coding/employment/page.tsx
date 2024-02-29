import { Metadata } from "next";
import React from "react";

import { EmploymentSelection } from "../../../src/components/employment";
import {
  EmploymentBackground,
  EmploymentPageTitle,
} from "../../../src/components/employment/styled";
import { listEmployments } from "../../../src/dal/api";
import { Employment } from "../../../src/types/api";

export const metadata: Metadata = {
  title: "d.jin - Employment",
};

export default async function EmploymentPage() {
  const employments: Employment[] = await listEmployments();
  return (
    <EmploymentBackground>
      <EmploymentPageTitle variant="h2">Coding Employment</EmploymentPageTitle>
      <EmploymentSelection employments={employments} />
    </EmploymentBackground>
  );
}
