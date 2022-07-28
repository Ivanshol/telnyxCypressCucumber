export const availableCountries = [
    'Estonia', 'Finland', 'Ireland', 'Israel', 'Mexico', 'Netherlands', 'New Zealand'
    , 'Philippines', 'Poland', 'Singapore', 'United Kingdom', 'All other countries']

    
    class TelnyxTalkToAnExpert{
    
        
        verifyAvailableCountries() {
            cy
            .get('section ul li')
            .each(($span, i) => {
                 expect($span.text()).to.equal(availableCountries[i]);
            });
        }
    
    }
    
    export default new TelnyxTalkToAnExpert()
    