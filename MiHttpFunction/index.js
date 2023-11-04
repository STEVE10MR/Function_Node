module.exports = async function (context, req) {
    context.res = {
        status: 302,
        headers: {
            'Location': 'https://worldofwarcraft.blizzard.com/en-us/character/us/ragnaros/deeplearng'
        }
    };
};
