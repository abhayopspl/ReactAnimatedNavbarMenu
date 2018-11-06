import React from "react";
import styled from "styled-components";

import { DevelopersDropdownEl } from "./DevelopersDropdownEl";
import { DropdownSection } from "../DropdownSection";
import { Heading } from "../../Heading";
import { HeadingLink } from "../../Heading/HeadingLink";
import { LinkList } from "../../Common/LinkList";
import { Flex } from "../../Common/Flex";
import { Icon } from "../../Common/Icon";

export const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection>
        <div>
          <Heading>Documentation</Heading>
          <p>Start integrating Stripe&rsquo;s products and tools</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="/">Elements</a>
                </li>
                <li>
                  <a href="/">Checkout</a>
                </li>
                <li>
                  <a href="/">Mobile apps</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <a href="/">Apple Pay</a>
                </li>
                <li>
                  <a href="/">Testing</a>
                </li>
                <li>
                  <a href="/">Launch Checklist</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> Full API Reference
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> API Status
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon /> Open Source
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};
