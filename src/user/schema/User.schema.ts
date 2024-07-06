import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class User {
    

    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: false})
    Gtoken: string;

    //String para luego hacerle match con la sesión
    @Prop({required: false})
    SessionString: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true, enum: ['Valparaíso', 'Santiago', 'San Felipe', 'all']})
    sede: string;

    @Prop({required: true})
    apellido_paterno: string;

    @Prop({required: false})
    apellido_materno: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
