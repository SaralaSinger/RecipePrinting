namespace Recipes.Data
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Measurement { get; set; }
        public int RecipeId { get; set; }
    }
}