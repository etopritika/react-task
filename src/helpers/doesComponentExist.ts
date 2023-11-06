function doesComponentExist(id: string) {
  try {
    require(`../components/tabs/${id}`);
    return true;
  } catch (error) {
    return false;
  }
}

export default doesComponentExist;
