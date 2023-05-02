export const usersMap = (values) => {
  const usersMapped = {
    page: values.page,
    perPage: values.per_page,
    support: values.support,
    total: values.total,
    totalPages: values.total_pages,
    data: values.data.map((item) => ({
      avatar: item.avatar,
      email: item.email,
      id: item.id,
      firstName: item.first_name,
      lastName: item.last_name,
    })),
  };

  return usersMapped;
};

export const userSelectedMap = (values) => {
  const userMapped = {
    firstName: values.first_name,
    lastName: values.last_name,
    email: values.email,
  };

  return userMapped;
};
