import { render } from "@testing-library/react";

import { HbvResearchPaper, Organization } from "../../types/api";
import HbvResearchCard from "./HbvResearchCard";

describe("HbvResearchCard", () => {
  it("renders", () => {
    const hbvResearchPaper: HbvResearchPaper = {
      name: "Name",
      organization: {
        name: "Organization",
        logoUrl: "https://via.placeholder.com/300.png",
      },
      mediaUrl: "https://media-url.com",
      startDate: new Date("2022-12-25T12:00:00Z"),
      endDate: new Date("2023-01-01T12:00:00Z"),
      url: "https://paper-link.com",
      description: "description",
      responsibilities: ["responsibility1", "responsibility2"],
      skills: ["skill1", "skill2"],
    };
    const hbvResearchCard = render(
      <HbvResearchCard hbvResearchPaper={hbvResearchPaper} />
    );
    expect(hbvResearchCard).toMatchSnapshot();
  });
});
