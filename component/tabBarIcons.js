import React from 'react';
import {Ionicons,Entypo,MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home=({focused})=>{
    return(
        <TouchableOpacity>
            <Ionicons name="ios-home" size={30} color={focused? "#3f90f2":"#aaa"} />
        </TouchableOpacity>
    )
}

export const Report=({focused})=>{
    return(
        <TouchableOpacity>
            <Entypo name="paper-plane" size={30} color={focused? "#3f90f2":"#aaa"} />
        </TouchableOpacity>
    )
}

export const Vitals=({focused})=>{
    return(
        <TouchableOpacity>
            <Ionicons name="ios-medkit" size={30} color={focused? "#3f90f2":"#aaa"} />
        </TouchableOpacity>
    )
}

export const Settings=({focused})=>{
    return(
        <TouchableOpacity>
            <Ionicons name="ios-settings" size={30} color={focused? "#3f90f2":"#aaa"} />
        </TouchableOpacity>
    )
}