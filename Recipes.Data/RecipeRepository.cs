using Microsoft.EntityFrameworkCore;

namespace Recipes.Data
{
    public class RecipeRepository
    {
        private readonly string _connectionString;

        public RecipeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddRecipe(Recipe recipe)
        {
            using var context = new DataContext(_connectionString);
            context.Recipes.Add(recipe);
            foreach(var ingredient in recipe.Ingredients)
            {
                ingredient.RecipeId = recipe.Id;
            }
            context.Ingredients.AddRange(recipe.Ingredients);
            context.SaveChanges();
        }
        public List<Recipe> GetAllRecipes()
        {
            using var context = new DataContext(_connectionString);
            return context.Recipes.Include(r => r.Ingredients).ToList();
        }
        public List<Recipe> GetAllRecipesForUser(int userId)
        {
            using var context = new DataContext(_connectionString);
            return context.Recipes.Include(r => r.Ingredients).Where(r => r.UserId == userId).ToList();
        }
        public Recipe GetRecipeById(int recipeId)
        {
            using var context = new DataContext(_connectionString);
            return context.Recipes.Include(r => r.Ingredients).FirstOrDefault(r => r.Id == recipeId);
        }
    }
}