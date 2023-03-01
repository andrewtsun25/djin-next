import { render } from "@testing-library/react";

import DurationWithOrganizationCardHeader, {
  CURRENT_BADGE_TEST_ID,
} from "./DurationWithOrganizationCardHeader";

describe("DurationWithOrganizationCardHeader", () => {
  const title = "Title";
  const subtitle = "Subtitle";
  const startDate = new Date("2022-12-25T12:00:00Z");
  const endDate = new Date("2023-01-01T12:00:00Z");
  const logoUrl = "https://via.placeholder.com/300.png";

  it("renders", () => {
    const durationWithOrganizationCardHeader = render(
      <DurationWithOrganizationCardHeader
        title={title}
        subtitle={subtitle}
        startDate={startDate}
        endDate={endDate}
        logoUrl={logoUrl}
      />
    );
    expect(durationWithOrganizationCardHeader).toMatchSnapshot();
  });

  it("renders the end date if the end date is provided", () => {
    const { getByText } = render(
      <DurationWithOrganizationCardHeader
        title={title}
        subtitle={subtitle}
        startDate={startDate}
        endDate={endDate}
        logoUrl={logoUrl}
      />
    );
    const datesAndSubtitle = getByText("Dec 25, 2022 - Jan 1, 2023: Subtitle");
    expect(datesAndSubtitle).not.toBeNull();
  });

  it("renders the avatar with the image at the logo url if the logo url is provided", () => {
    const { getByAltText } = render(
      <DurationWithOrganizationCardHeader
        title={title}
        subtitle={subtitle}
        startDate={startDate}
        endDate={endDate}
        logoUrl={logoUrl}
      />
    );
    const logo = getByAltText(title);
    expect(logo).toBeVisible();
  });

  it("renders present for the end date if the end date is not provided", () => {
    const { getByText, getByTestId } = render(
      <DurationWithOrganizationCardHeader
        title={title}
        subtitle={subtitle}
        startDate={startDate}
        logoUrl={logoUrl}
      />
    );
    const datesAndSubtitle = getByText("Dec 25, 2022 - Present: Subtitle");
    expect(datesAndSubtitle).not.toBeNull();
    const currentBadge = getByTestId(CURRENT_BADGE_TEST_ID);
    expect(currentBadge).not.toBeNull();
  });

  it("renders the person icon in the Avatar if logoUrl is not provided", () => {
    const { getByTestId } = render(
      <DurationWithOrganizationCardHeader
        title={title}
        subtitle={subtitle}
        startDate={startDate}
        endDate={endDate}
      />
    );
    const avatarAltText = getByTestId("PersonIcon");
    expect(avatarAltText).not.toBeNull();
  });
});
