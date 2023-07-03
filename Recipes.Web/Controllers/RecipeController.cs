using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipes.Data;

namespace Recipes.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly string _connectionString;

        public RecipeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("addrecipe")]
        [HttpPost]
        public void AddRecipe(Recipe recipe)
        {
            var userRepo = new UserRepository(_connectionString);
            var user = userRepo.GetByEmail(User.Identity.Name);
            recipe.UserId = user.Id;
            var recipeRepo = new RecipeRepository(_connectionString);
            recipeRepo.AddRecipe(recipe);
        }
        [Route("getmyrecipes")]
        [HttpGet]
        public List<Recipe> GetMyRecipes()
        {
            var userRepo = new UserRepository(_connectionString);
            var user = userRepo.GetByEmail(User.Identity.Name);
            var recipeRepo = new RecipeRepository(_connectionString);
            return recipeRepo.GetAllRecipesForUser(user.Id);
        }
        [Route("getall")]
        [HttpGet]
        public List<Recipe> GetAll()
        {
            var recipeRepo = new RecipeRepository(_connectionString);
            return recipeRepo.GetAllRecipes();
        }

        [Route("getrecipebyid")]
        [HttpGet]
        public Recipe GetRecipeById(int id)
        {
            var recipeRepo = new RecipeRepository(_connectionString);
            return recipeRepo.GetRecipeById(id);
        }
        [Route("getcategories")]
        [HttpGet]
        public Category[] GetCategories()
        {
            return (Category[])Enum.GetValues(typeof(Category));
        }
    }
}
