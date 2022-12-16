import type { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import handler from "./hello";
describe("helloHandler", () => {
  it("returns a response", async () => {
    const { req, res } = createMocks({ method: "GET" });
    const expected = { name: "John Doe" };
    await handler(req, res);
    expect(res._getStatusCode()).toEqual(200);
    expect(res._getJSONData()).toEqual(expected);
  });
});
