export default {
  home: "/",
  account(slug) {
    return {
      href: "/account/[slug]",
      as: `/account/${slug}`,
    };
  },
  profile(id) {
    return {
      href: "/profile/[id]",
      as: `/profile/${id}`,
    };
  },
  contact: "/contact",
  service(id) {
    return {
      href: "/service/[id]",
      as: `/service/${id}`,
    };
  },
};
