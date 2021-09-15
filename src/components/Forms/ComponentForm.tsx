
import { useState } from 'react';
import { weatherData } from './../../models/weatherData';

export const ComponentForm = (props: any) => {


    return (
        <form onSubmit={props.submit}>
            <label>
                Nom de la ville :
                <input type="text" name="town" value={props.town} onChange={(e) => props.setTown(e.target.value)} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    )

}