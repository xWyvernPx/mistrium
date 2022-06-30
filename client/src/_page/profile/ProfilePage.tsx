import React from "react";
import styled from "styled-components";
import ProfileHeader from "../../_components/profile/header/ProfileHeader";
import ProfileDetail from "../../_components/profile/main/ProfileDetail";
const ProfilePageLayout = styled.div`
  /* padding: 2rem var(--section-x-padding); */
  margin-top: var(--header-height);
`;
const ProfileBackgroundWrapper = styled.div`
  width: 100%;
  height: 30rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ProfilePage = () => {
  return (
    <ProfilePageLayout>
      {/* <ProfileHeader /> */}
      <ProfileBackgroundWrapper>
        <img src="https://source.unsplash.com/random" alt="" />
      </ProfileBackgroundWrapper>
      <ProfileDetail />
    </ProfilePageLayout>
  );
};

export default ProfilePage;
