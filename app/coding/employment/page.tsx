import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import React, { Suspense } from "react";

import { EmploymentSelection } from "../../../src/components/employment";
import { ImageBackground } from "../../../src/components/layout";
import { Loading } from "../../../src/components/loading";
import { Urls } from "../../../src/const/url";
import { listEmployments } from "../../../src/dal/api";
import { Employment } from "../../../src/types/api";

const bgUrl = `${Urls.AssetRoot}/employment/bg/anduril_office.png`;

export const metadata: Metadata = {
  title: "d.jin - Employment",
};

export default async function EmploymentPage(): Promise<React.JSX.Element> {
  const employments: Employment[] = await listEmployments();
  return (
    <>
      <ImageBackground src={bgUrl} />
      <Box sx={{ p: 2 }}>
        <Typography variant="h2" sx={{ mt: 2, mb: 2 }} textAlign="center">
          Coding Employment
        </Typography>
        <Suspense fallback={<Loading message={"Loading employments..."} />}>
          <EmploymentSelection employments={employments} />
        </Suspense>
      </Box>
    </>
  );
}
