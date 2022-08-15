export const AvatarBgColor = (note) => {
    if (note === "a" || note === "e" || note === "i" || note === "m" || note === "q" || note === "u" || note === "1" || note === "5") {
        return { bg: '#FFEEEF', color: '#FF5963' }
    }
    else if (note === "b" || note === "f" || note === "j" || note === "n" || note === "r" || note === "v" || note === "x" || note === "2" || note === "6" || note === "9") {
        return { bg: '#E6F9F4', color: '#02C58F' }
    }
    else if (note === "c" || note === "g" || note === "k" || note === "o" || note === "s" || note === "w" || note === "y" || note === "3" || note === "7") {
        return { bg: '#FFF5EF', color: '#FF985F' }
    }
    else {
        return { bg: '#E8F3FF', color: '#1E86FF' }
    }
};

export const RoleBgColor = (note) => {
    if (note === "a") {
        return { bg: '#FFEEEF', color: '#FF5963' }
    }
    else if (note === "s") {
        return { bg: '#E6F9F4', color: '#02C58F' }
    }
    else {
        return { bg: '#E8F3FF', color: '#1E86FF' }
    }
};