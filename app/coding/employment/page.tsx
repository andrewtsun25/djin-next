import { Metadata } from "next";
import React, { Suspense } from "react";

import { EmploymentSelection } from "../../../src/components/employment";
import {
  EmploymentBackground,
  EmploymentPageTitle,
} from "../../../src/components/employment/styled";
import { Loading } from "../../../src/components/loading";
import { listEmployments } from "../../../src/dal/api";
import { Employment } from "../../../src/types/api";

export const metadata: Metadata = {
  title: "d.jin - Employment",
};

export default async function EmploymentPage(): Promise<React.JSX.Element> {
  const employments: Employment[] = await listEmployments();
  return (
    <EmploymentBackground>
      <EmploymentPageTitle variant="h2">Coding Employment</EmploymentPageTitle>
      <Suspense fallback={<Loading message={"Loading employments..."} />}>
        <EmploymentSelection employments={employments} />
      </Suspense>
    </EmploymentBackground>
  );
}
