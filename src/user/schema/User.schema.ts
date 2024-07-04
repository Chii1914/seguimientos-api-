import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class User {
    

    @Prop({unique: true, required: true})
    email: string;
    
    //Token para la posterior autenticación
    @Prop({required: false})
    Gtoken: string;

    //String para luego hacerle match con la sesión
    @Prop({required: false})
    SessionString: string;

    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    sede: string;

    @Prop({required: true})
    apellido_paterno: string;

    @Prop({required: false})
    apellido_materno: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
