using System.ComponentModel;

namespace Recipes.Data
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public string Directions { get; set; }
        public string PrepTime { get; set; }
        public string Source { get; set; }
        public int UserId { get; set; }
        public Category Category { get; set; }
        public string Notes { get; set; }
        
    }
}