import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class User {
    
    @Prop({unique: true, required: true})
    email: string;
    
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    apellido_paterno: string;

    @Prop({required: false})
    apellido_materno: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
