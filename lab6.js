function createUserProfile() {
  const userName = "guest";

  const userProfile = {
    userName: "admin",
    showProfile() {
      console.log(this.userName);
    },
  };

  return { userProfile, defaultName: userName };
}

const { userProfile } = createUserProfile();

setTimeout(() => userProfile.showProfile(), 1000);
