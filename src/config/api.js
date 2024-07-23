const API = {
	siteID: 1, // 11 gamechy
  getAllGamesURL: 'https://api.gamepog.com/api/Game/GetGamesList',
  getTagsForPageURL: 'https://api.gamesunblockeds.com/api/Game/GetTagsForPage',
	getCategoriesURL: 'https://api.gamesunblockeds.com/api/Game/GetGameCategories',
	getGamesByCategoryURL: 'https://api.gamesunblockeds.com/api/Game/GetGames?categoryId=12',
	getGameURL: 'https://api.gamepog.com/api/Game/GetGame'
};

const DOMAIN_URL = 'https://gameonl.com';

export {
	API,
	DOMAIN_URL
}