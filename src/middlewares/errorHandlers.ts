
export class ErrorHandlers {

    static notFound(req:any, res:any, next:any){
        if( res.code == 404){
            return res.status(404).json({ message: 'ressource not found'})
        }
        next()
        
    }

    static forbidden(req:any, res:any, next:any){
        if(res.code == 403){
            return res.status(403).json({ message: 'Forbidden access'})
        } 
        next()
        

    }

    static badRequest(req:any, res:any, next:any){
        if (res.code == 400){
            return res.status(400).json({ message: 'Bad Request'})
        }
        next()

    }
}