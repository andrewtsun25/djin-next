import { Typography } from "@mui/material";
import { Metadata } from "next";
import React, { Suspense } from "react";

import { EmploymentSelection } from "../../../src/components/employment";
import { ImageBackground, PageBox } from "../../../src/components/layout";
import { Loading } from "../../../src/components/loading";
import { Urls } from "../../../src/const/url";
import { listEmployments } from "../../../src/dal/api";
import { Employment } from "../../../src/types/api";

const bgUrl = `${Urls.AssetRoot}/employment/bg/anduril_office.png`;

export const metadata: Metadata = {
  title: "d.jin - Employment",
};

export default async function EmploymentsPage(): Promise<React.JSX.Element> {
  const employments: Employment[] = await listEmployments();
  return (
    <>
      <ImageBackground src={bgUrl} />
      <PageBox>
        <Typography variant="h2" sx={{ mb: 2 }} textAlign="center">
          Coding Employment
        </Typography>
        <Suspense fallback={<Loading message={"Loading employment..."} />}>
          <EmploymentSelection employments={employments} />
        </Suspense>
      </PageBox>
    </>
  );
}
