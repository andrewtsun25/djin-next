import { fireEvent, render } from "@testing-library/react";
import * as nextRouter from "next/router";

import AppToolBarPages, { MENU_BUTTON_ROLE } from "./AppToolBarPages";

const mockNextRouter = nextRouter as unknown as {
  useRouter: () => { asRouter: string };
};

function createUseRouter(asRouter: string) {
  return () => ({
    asRouter,
  });
}

jest.mock("next/router", () => {
  return {
    __esModule: true,
    useRouter: null,
  };
});

describe("AppToolBarPages", () => {
  let setIsAppDrawerOpen: (b: boolean) => void;

  beforeEach(() => {
    setIsAppDrawerOpen = jest.fn();
  });

  it("renders with a fixed header if tthe app is on the home page", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = true;
    const appToolBar = render(
      <AppToolBarPages
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    expect(appToolBar).toMatchSnapshot();
  });

  it("renders with a sticky header if the app isn't on the home page", () => {
    mockNextRouter.useRouter = createUseRouter("/academic/hbv");
    const isAppDrawerOpen = true;
    const appToolBar = render(
      <AppToolBarPages
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    expect(appToolBar).toMatchSnapshot();
  });

  xit("opens the drawer if the drawer isn't opened", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = false;
    const { getByRole } = render(
      <AppToolBarPages
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    const menuButton = getByRole(MENU_BUTTON_ROLE);
    fireEvent.click(menuButton);
    expect(setIsAppDrawerOpen).toHaveBeenCalledWith(true);
  });

  xit("doesn't render the menu button if the drawer is open", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = true;
    const { queryByRole } = render(
      <AppToolBarPages
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    const menuButton = queryByRole(MENU_BUTTON_ROLE);
    expect(menuButton).toBeNull();
  });
});
