import { fireEvent, render } from "@testing-library/react";
import AppToolBar, { MENU_BUTTON_ROLE } from "./AppToolBar";
import * as nextRouter from "next/router";

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

describe("AppToolBar", () => {
  let setIsAppDrawerOpen: (b: boolean) => void;

  beforeEach(() => {
    setIsAppDrawerOpen = jest.fn();
  });

  it("renders with a fixed header if tthe app is on the home page", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = true;
    const appToolBar = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
    );
    expect(appToolBar).toMatchSnapshot();
  });

  it("renders with a sticky header if the app isn't on the home page", () => {
    mockNextRouter.useRouter = createUseRouter("/academic/hbv");
    const isAppDrawerOpen = true;
    const appToolBar = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
    );
    expect(appToolBar).toMatchSnapshot();
  });

  it("opens the drawer if the drawer isn't opened", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = false;
    const { getByRole } = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
    );
    const menuButton = getByRole(MENU_BUTTON_ROLE);
    fireEvent.click(menuButton);
    expect(setIsAppDrawerOpen).toHaveBeenCalledWith(true);
  });

  it("doesn't render the menu button if the drawer is open", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = true;
    const { queryByRole } = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
    );
    const menuButton = queryByRole(MENU_BUTTON_ROLE);
    expect(menuButton).toBeNull();
  });

  it("renders with a sticky header if the app isn't on the home page", () => {
    mockNextRouter.useRouter = createUseRouter("/");
    const isAppDrawerOpen = true;
    const { queryByRole } = render(
      <AppToolBar
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
    );
  });
});
