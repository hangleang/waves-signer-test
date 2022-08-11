export const hasMultiaccount = (): boolean => {
  const encrypted = JSON.parse(
      localStorage.getItem('multiAccountData') || 'null'
  );
  const hash = JSON.parse(
      localStorage.getItem('multiAccountHash') || 'null'
  );

  return !!hash && !!encrypted;
}

export const getActualAmount = (amount: string, decimals: number): number => {
  return parseInt(amount, 10) / 10 ** decimals;
};
