import { fireEvent, render } from "@testing-library/react";
import AppToolBar, { MENU_BUTTON_ROLE } from "./AppToolBar";

describe("AppToolBar", () => {
  let setIsAppDrawerOpen: (b: boolean) => void;

  beforeEach(() => {
    setIsAppDrawerOpen = jest.fn();
  });

  it("renders", () => {
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
});
