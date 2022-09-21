

function alertMessage(categoryID) {
    $.ajax({
        url: '/',
        data: {
            categoryID: categoryID
        },
        type: 'POST'
    });
}



