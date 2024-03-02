import React from "react";

import { HolisticOfficeLink } from "../../../types/api";
import { IconLink } from "../../text";
import { HolisticOfficeLinkListUnorderedList } from "../styled/HolisticOfficeLinkListUnorderedList";

interface LinkSectionContentProps {
  links: HolisticOfficeLink[];
  icon: React.JSX.Element;
}

const holisticOfficeLinkColor = "#308575";

const LinkList: React.FC<LinkSectionContentProps> = ({
  links,
  icon,
}: LinkSectionContentProps) => {
  return (
    <HolisticOfficeLinkListUnorderedList>
      {links.map(({ name, url }: HolisticOfficeLink) => (
        <IconLink
          href={url}
          text={name}
          icon={icon}
          key={name}
          sx={{ color: holisticOfficeLinkColor }}
        />
      ))}
    </HolisticOfficeLinkListUnorderedList>
  );
};

export default LinkList;
