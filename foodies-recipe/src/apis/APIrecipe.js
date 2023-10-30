import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase";

export const APIrecipe = {
  getRecipes: async () => {
    try {
      const result = await getDocs(collection(db, "recipe"));
      const recipe = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("API calls successful: ", result.id);
      return recipe;
    } catch (error) {
      message.error("login failed. your email or password is wrong!");
      console.error(error);
    }
  },

  addRecipe: async (recipe) => {
    try {
      const docRef = await addDoc(collection(db, "recipe"), recipe);
      console.log("Document is written in ID : ", docRef.id);
      return docRef;
    } catch (error) {
      console.log("Error adding document", e);
      throw new Error(e);
    }
  },

  deleteRecipe: async (id) => {
    try {
      console.log(id);
      const recipeRef = doc(db, "recipe", id);
      await deleteDoc(recipeRef);
      return "Successfully deleted recipe";
    } catch (e) {
      console.error("Error deleting document: ", e);
      throw new Error(e);
    }
  },
};
