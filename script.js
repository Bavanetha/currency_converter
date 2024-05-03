
function convert(){
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;

    var currencies = {
        'USD': 1,
        'EUR': 0.85,    // Euro
        'GBP': 0.72,    // British Pound Sterling
        'JPY': 110.32,  // Japanese Yen
        'AUD': 1.28,    // Australian Dollar
        'CAD': 1.25,    // Canadian Dollar
        'CHF': 0.92,    // Swiss Franc
        'CNY': 6.44,    // Chinese Yuan
        'SEK': 8.74,    // Swedish Krona
        'NZD': 1.39,    // New Zealand Dollar
        'MXN': 20.36,   // Mexican Peso
        'SGD': 1.35,    // Singapore Dollar
        'HKD': 7.77,    // Hong Kong Dollar
        'NOK': 8.43,    // Norwegian Krone
        'KRW': 1177.22, // South Korean Won
        'TRY': 13.26,   // Turkish Lira
        'RUB': 73.23,   // Russian Ruble
        'INR': 76.83,   // Indian Rupee
        'BRL': 5.63,    // Brazilian Real
        'ZAR': 14.42,   // South African Rand
        'AED': 3.67,    // UAE Dirham
        'SAR': 3.75,    // Saudi Riyal
    }

    var result = amount * (currencies[toCurrency] / currencies[fromCurrency]);
    document.getElementById('result').innerHTML = result.toFixed(2)+" "+toCurrency;
}