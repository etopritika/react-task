function doesComponentExist(id: string): boolean {
  try {
    require(`../components/tabs/${id}`);
    return true;
  } catch (error) {
    return false;
  }
}

export default doesComponentExist;
