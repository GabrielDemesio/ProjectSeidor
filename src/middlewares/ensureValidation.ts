
// Retirado de: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiLity0hez-AhWYuJUCHbD1A4YQFnoECBIQAQ&url=https%3A%2F%2Fexpressjs.com%2Fen%2Fguide%2Fwriting-middleware.html&usg=AOvVaw26g3HzrC9bply2oTfeKox2
// Redirado de: https://stackabuse.com/form-data-validation-in-nodejs-with-express-validator/
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
// Validação de data\\
export function ensureValidation(request: Request, response: Response, next: NextFunction) {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }

    return next();
}