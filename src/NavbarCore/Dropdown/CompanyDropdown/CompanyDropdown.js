import React from "react";
import styled from "styled-components";

import { CompanyDropdownEl } from "./CompanyDropDownEl";
import { DropdownSection } from "../DropdownSection";
import { HeadingLink } from "../../Heading/HeadingLink";
import { Icon } from "../../Common/Icon";
import { LinkList } from "../../Common/LinkList";
import { Heading } from "../../Heading/";

export const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> About Stripe
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Customers
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />Jobs
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon />Environment
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />From the Blog
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="/">Stripe Atlas &rsaquo;</a>
            </li>
            <li>
              <a href="/">Stripe Home &rsaquo;</a>
            </li>
            <li>
              <a href="/">Improved Fraud Detection &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};
