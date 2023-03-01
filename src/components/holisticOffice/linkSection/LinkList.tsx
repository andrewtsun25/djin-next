import React from "react";

import { HolisticOfficeLink, HolisticOfficeLinkType } from "../../../types/api";
import { HolisticOfficeLinkListIconLink } from "../styled";
import HolisticOfficeLinkListUnorderedList from "../styled/HolisticOfficeLinkListUnorderedList";

interface LinkSectionContentProps {
  links: HolisticOfficeLink[];
  icon: JSX.Element;
}

const LinkList: React.FC<LinkSectionContentProps> = ({
  links,
  icon,
}: LinkSectionContentProps) => {
  return (
    <HolisticOfficeLinkListUnorderedList>
      {links.map(({ name, url }: HolisticOfficeLink) => (
        <HolisticOfficeLinkListIconLink
          href={url}
          text={name}
          icon={icon}
          key={name}
        />
      ))}
    </HolisticOfficeLinkListUnorderedList>
  );
};

export default LinkList;
