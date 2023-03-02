import { render } from "@testing-library/react";

import { MusicScoreIcon } from "./MusicScoreIcon";

describe("MusicScoreIcon", () => {
  it("renders", () => {
    const fistIcon = render(<MusicScoreIcon />);
    expect(fistIcon).toMatchSnapshot();
  });
});
