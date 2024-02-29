import { fireEvent, render } from "@testing-library/react";
import * as nextNavigation from "next/navigation";

import { AppToolBar, MENU_BUTTON_ROLE } from "./AppToolBar";

const mockNextNavigation = nextNavigation as unknown as {
  usePathname: () => string;
};

function createUsePathname(pathname: string) {
  return () => pathname;
}

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: null,
  };
});

describe("AppToolBar", () => {
  let setIsAppDrawerOpen: (b: boolean) => void;

  beforeEach(() => {
    setIsAppDrawerOpen = jest.fn();
  });

  it("renders with a fixed header if the app is on the home page", () => {
    mockNextNavigation.usePathname = createUsePathname("/");
    const isAppDrawerOpen = true;
    const appToolBar = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    expect(appToolBar).toMatchSnapshot();
  });

  it("renders with a sticky header if the app isn't on the home page", () => {
    mockNextNavigation.usePathname = createUsePathname("/academic/hbv");
    const isAppDrawerOpen = true;
    const appToolBar = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    expect(appToolBar).toMatchSnapshot();
  });

  xit("opens the drawer if the drawer isn't opened", () => {
    mockNextNavigation.usePathname = createUsePathname("/");
    const isAppDrawerOpen = false;
    const { getByRole } = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    const menuButton = getByRole(MENU_BUTTON_ROLE);
    fireEvent.click(menuButton);
    expect(setIsAppDrawerOpen).toHaveBeenCalledWith(true);
  });

  xit("doesn't render the menu button if the drawer is open", () => {
    mockNextNavigation.usePathname = createUsePathname("/");
    const isAppDrawerOpen = true;
    const { queryByRole } = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    const menuButton = queryByRole(MENU_BUTTON_ROLE);
    expect(menuButton).toBeNull();
  });
});
