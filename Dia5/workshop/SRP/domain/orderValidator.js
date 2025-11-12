import { error } from "console";

export class orderValidator {
    validate(userEmail, courseId, basePrice,) {
        if (!userEmail || !userEmail.includes("@")) throw new error("email invalidio");
        if (!courseId) throw new Error("courseId requerido");
        if (typeof basePrice !== "number" || basePrice < 0 ) throw new error("basePrice invalidi");    
    }
}

