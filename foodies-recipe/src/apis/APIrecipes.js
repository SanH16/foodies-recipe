import { axiosInstance } from "../configs/axiosInstance";

export const APIrecipes = {
  getRecipes: async () => {
    try {
      const result = await axiosInstance.get(`/recipes/complexSearch`);
      return result.data; // hanya ambil data jadi return spesifik result.data
    } catch (error) {
      console.error(error);
    }
  },
};
