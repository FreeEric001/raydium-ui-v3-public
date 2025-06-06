export const API_URLS = {
  //BASE_HOST: "https://api-v3.raydium.io",
  BASE_HOST: "https://faucet.devnet.openverse.network:4433",
  BASE_HOST_F: "https://api-v3.raydium.io",
  // BASE_HOST2: " https://rd.demo.benfusite.com",
 
  // BASE_HOST2: "https://rdtemp.openswap.me",
  // BASE_HOST2: "https://rd1.openswap.me",
  // BASE_HOST2: "https://rd777.openswap.me",
  BASE_HOST2: "https://tsapi1.openswap.me",
  BASE_HOST3: "https://rd999.openswap.me",
 
  OWNER_BASE_HOST: "https://owner-v1.raydium.io",
  SERVICE_BASE_HOST: "https://service.raydium.io",
  //MONITOR_BASE_HOST: "https://monitor.raydium.io",
  MONITOR_BASE_HOST: "https://faucet.devnet.openverse.network:4433",
  SERVICE_1_BASE_HOST: "https://faucet.devnet.openverse.network:4433",

  SEND_TRANSACTION: "/send-transaction",
  FARM_ARP: "/main/farm/info",
  FARM_ARP_LINE: "/main/farm-apr-tv",

  CLMM_CONFIG: "/main/clmm-config",
  CPMM_CONFIG: "/main/cpmm-config",

  VERSION: "/main/version",

  // api v3
  CHECK_AVAILABILITY: "/v3/main/AvailabilityCheckAPI",
  RPCS: "/main/rpcs",
  INFO: "/main/info",
  STAKE_POOLS: "/main/stake-pools",
  CHAIN_TIME: "/main/chain-time",

  TOKEN_LIST: "/mint/list",
  MINT_INFO_ID: "/mint/ids",

  JUP_TOKEN_LIST: "https://tokens.jup.ag/tokens?tags=lst,community",
  /**
   * poolType: {all, concentrated, standard, allFarm, concentratedFarm, standardFarm}
   * poolSortField: {liquidity | volume_24h / 7d / 30d | fee_24h / 7d / 30d | apr_24h / 7d / 30d}
   * sortType: {desc/asc}
   * page: number
   * pageSize: number
   */
  POOL_LIST: "/pools/info/list",
  /**
   * ?ids=idList.join(',')
   */
  POOL_SEARCH_BY_ID: "/pools/info/ids",
  /**
   * mint1/mint2: search pool by mint
   * poolSortField: {liquidity | volume_24h / 7d / 30d | fee_24h / 7d / 30d | apr_24h / 7d / 30d}
   * poolType: {all, concentrated, standard, allFarm, concentratedFarm, standardFarm}
   * sortType: {desc/asc}
   * page: number
   * pageSize: number
   */
  POOL_SEARCH_MINT: "/pools/info/mint",
  /** ?lps=lpList.join(',') */
  POOL_SEARCH_LP: "/pools/info/lps",
  /** ?ids=idList.join(',') */
  POOL_KEY_BY_ID: "/pools/key/ids",
  /** ?id=string */
  POOL_LIQUIDITY_LINE: "/pools/line/liquidity",
  POOL_POSITION_LINE: "/pools/line/position",

  FARM_INFO: "/farms/info/ids",
  /** ?lp=string&pageSize=100&page=number */
  FARM_LP_INFO: "/farms/info/lp",
  FARM_KEYS: "/farms/key/ids",

  OWNER_CREATED_FARM: "/create-pool/{owner}",
  OWNER_IDO: "/main/ido/{owner}",
  OWNER_STAKE_FARMS: "/position/stake/{owner}",
  OWNER_LOCK_POSITION: "/position/clmm-lock/{owner}",
  IDO_KEYS: "/ido/key/ids",
  // SWAP_HOST: "https://transaction-v1.raydium.io",
  SWAP_HOST: "https://rd1.openswap.me",
  SWAP_HOST2: "https://tsapi2.openswap.me",
  // SWAP_HOST2: "https://rd2.openswap.me",
  SWAP_COMPUTE: "/compute/",
  SWAP_TX: "/transaction/",
  MINT_PRICE: "/mint/price",
  MIGRATE_CONFIG: "/main/migrate-lp",
  PRIORITY_FEE: "/main/auto-fee",

  CPMM_LOCK: "https://dynamic-ipfs.raydium.io/lock/cpmm/position",

  // 获取代币详细信息
  TOKEN_INFOS: "/api/mint/add",
};

export const DEV_API_URLS = {
  ...API_URLS,
};

export type API_URL_CONFIG = Partial<typeof API_URLS>;

