"use strict";

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropDownList(id) {
    const dropdownContent = document.getElementById(id)

    dropdownContent.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const tableRender = {
    render: (data) => {
        let html = '';

        for (const row of data.rows) {
            let content = tableRender.renderCol(row.columns);
            html += `<tr class="${row.options.classList.join(' ')}">${content}</tr>`;
        }

        return html;
    },

    renderCol: columns => {
        let html = '';

        for (const col of columns) {
            let selector = col.type === 'th' ? 'td' : 'td'
            let classList = col.options.classList.length ? col.options.classList.join(' ') : '';

            html += `<${selector} class="${classList}">${col.content}</${selector}>`;
        }

        return html;
    }
}

function createInput(options = {}) {
    if (!options.required) {
        options.required = false;
    }

    if (!options.placeholder) {
        options.placeholder = 'placeholder';
    }

    if (!options.id) {
        options.id = `input_${ Math.random().toFixed()}`
    }

    if (!options.overview_text) {
        options.overview_text = 'overview text';
    }

    if (!options.error_text) {
        options.error_text = 'error text'
    }

    if (!options.data_name) {
        options.data_name = 'data-name';
    }

    let html = `<div mui-flex-input-container>
                <div mui-flex-input-group>
                    <label for="${options.id}">
                        <div mui-flex-input type="default" color="light">
                        <input data-placeholder="${options.placeholder}" data-name="${options.data_name}" id="${options.id}" type="text" ${options.required ? 'required' : ''}>
                        <span mui-flex-input-overview>
                            <span>${options.overview_text}</span>
                        </span>
                        </div>
                    </label>
                    <div mui-flex-input-hidden-text='error' class="hidden">
                        ${options.error_text}
                    </div>
                </div>
            </div>`.trim();

    return html;
}

function createLoader() {
    const loaderBox = document.createElement('div');

    loaderBox.classList.add('flex', '_horizontal', '_center', '_middle', 'full-size');
    loaderBox.setAttribute('id', 'loader');

    const loader = document.createElement('div');

    loader.classList.add('loader');
    loaderBox.append(loader);

    return loaderBox;
}

function statisticRender() {
    const data = apiConfig.jsonData;
    const selector = '#directionStatistic';

    let html = `
            <tr class="tui-table__tr">
                <th class="tui-table__th tui-table__th_font-size_l">Направление</th>
                <th class="tui-table__th tui-table__th_font-size_l">Всего продуктов</th>
                <th class="tui-table__th tui-table__th_font-size_l">Всего тематик</th>
                <th class="tui-table__th tui-table__th_font-size_l"></th>
            </tr>`;

    for (const direction of data) {

        const productsArray = apiConfig.getProductsDirection(direction);

        const paramsArray = apiConfig.getReasonsDirection(direction);

        const name = direction.name;

        const products = productsArray.length;

        const params = paramsArray.length;

        html += `
                <tr class="tui-table__tr">
                    <td class="tui-table__td">${ name }</td>
                    <td class="tui-table__td">${ products }</td>
                    <td class="tui-table__td">${ params }</td>
                    <td class="tui-table__td"><div data-property="${ name }" icon-data="iconDeleteLarge"></div></td>
                </tr>`;

        $(selector).children('tbody').empty();
        $(selector).children('tbody').html(html);

        createIcons();

        const icon = document.querySelectorAll('[icon-data="iconDeleteLarge"]');

        icon.forEach(icon => {
            icon.addEventListener('click', function () {

                function closePopup() {
                    title.remove();
                    popup.style.display = 'none';

                    delete_button.removeEventListener('click', deleteFunction);
                }

                const closePopupFunction = function (event) {
                    if (event) {
                        event.stopPropagation();
                    }

                    closePopup();

                    close.removeEventListener('click', closePopupFunction);
                    modal_content.removeEventListener('click', closePopupFunction);
                    popup.removeEventListener('click', closePopupFunction);
                    cancel_button.removeEventListener('click', closePopupFunction);
                    delete_button.removeEventListener('click', deleteFunction);
                }

                const deleteFunction = function () {
                    const targetDirection = apiConfig.getDirectionByName(targetValue);

                    apiConfig.postDataToWritter({
                        command: 'direction',
                        method: 'delete',
                        direction_name: targetDirection.name
                    }, function (result) {
                        if (result) {
                            showNotification(JSON.parse(result));
                        }

                        closePopupFunction();

                        apiConfig.getJsonData(preloadDataFromJson);
                    });
                }

                const targetValue = $(this).attr('data-property');
                const popup = document.getElementById('popup_delete');
                const close = popup.querySelector('.close');
                const modal_content = popup.querySelector('.modal-content');
                const delete_button = modal_content.querySelector('[data-property="delete"]');
                const cancel_button = modal_content.querySelector('[data-property="cancel"]');
                const title = document.createElement('div');

                title.classList.add('mui-text_h6', 'mui-space_bottom-5', 'flex', '_horizontal', '_center');

                title.innerText = "Удалить направление " + targetValue + "?";

                modal_content.prepend(title);

                $(modal_content).prepend(`<div class="flex _horizontal _middle _center mui-space_bottom-5"><div class="marker-icon marker-icon-xl"><svg class="size-xl" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"><g xmlns="http://www.w3.org/2000/svg" transform="translate(-24,-24)"><svg x="50%" y="50%"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M23.25 15C22.3889 15 21.7046 15.7234 21.7524 16.5832L22.3357 27.0832C22.3799 27.8781 23.0373 28.5 23.8334 28.5H23.9954C24.7915 28.5 25.449 27.8781 25.4931 27.0832L26.0764 16.5832C26.1242 15.7234 25.4399 15 24.5788 15H23.25ZM23.9144 30C23.086 30 22.4144 30.6716 22.4144 31.5C22.4144 32.3284 23.086 33 23.9144 33C24.7428 33 25.4144 32.3284 25.4144 31.5C25.4144 30.6716 24.7428 30 23.9144 30Z" fill="currentColor"></path></svg></svg></g></svg></div></div>`);

                popup.style.display = "flex";

                modal_content.addEventListener('click', closePopupFunction);
                popup.addEventListener('click', closePopupFunction);
                cancel_button.addEventListener('click', closePopupFunction);
                delete_button.addEventListener('click', deleteFunction);
                close.addEventListener('click', closePopupFunction);
            });
        });
    }
}

function createInputTemplate(data = {}) {
    let html = `
        <input mui-flex-input mui-flex-color="light" data-overview="${data.overview ? data.overview : ''}" data-placeholder="${data.placeholder ? data.placeholder : ''}" id="input_${data.id}" data-error-text="${data.error_text}"  ${data.required ? 'require' : ''}>`;

    return html.trim();
}

function dinamicCreatePopup(data = {}, options = {}) {

    // let headerContent;
    // let bodyContent;
    // let footerContent;

    let titleHTML = data.title ? `<span class="mui-text_h6">${data.title}</span>` : '';


    let html = `
    <div id="popup_addNewDirection" class="modal">
        <div class="modal-content single">
            <!-- <div class="modal-header"></div> -->
            ${titleHTML}
            <span class="close">
                <div icon-data="iconCloseLarge"></div>
            </span>
            <div class="modal-body"></div>
            <!-- <div class="modal-footer"></div> -->
            <div class="flex _horizontal _center">
                <button id="cancelButton_addNewDirection" class="mui-button mui-space_right-5">Отменить</button>
                <button id="button_addNewDirection" class="mui-button" onclick="event.stopPropagation()">Добавить</button>
            </div>
        </div>
    </div>`;
}

function dinamicCreateAlertsMui(content, type, options = {}) {
    const getIconType = function (type) {
        switch (type) {
            case 'success':
                return 'iconCheckFill';
            case 'warning':
                return 'iconAttentionFill';
            case 'error':
                return 'iconCloseCircleFill';
            case 'info':
                return 'iconInfoFill';
        }
    }

    if (options.autoClose === undefined) {
        options.autoClose = false;
    }

    if (!options.closeTime) {
        options.closeTime = 5000;
    }

    if (options.showCloseButton === undefined) {
        options.showCloseButton = true;
    }

    if (options.hasIcon === undefined) {
        options.hasIcon = true;
    }

    if (!options.iconType) {
        options.iconType = getIconType(type);
    }

    if (!options.heading) {
        options.heading = '';
    }

    if (options.hasCloseButton === undefined) {
        options.hasCloseButton = true;
    }


    let closeButton = null;
    let timer = null;

    const alertContainer = document.createElement('div');
    alertContainer.classList.add('mui-alert-container');

    const alert = document.createElement('div');
    alert.classList.add('mui-alert');

    if (type) {
        alert.classList.add(type);
    }

    if (options.hasIcon) {
        alert.classList.add('_has-icon');
        const alertIcon = document.createElement('div');
        alertIcon.setAttribute('icon-data', options.iconType);
        alertIcon.classList.add('alert-icon');
        alert.append(alertIcon);
    }

    if (options.hasCloseButton) { // Создание и отображение кнопки закрытия
        alert.classList.add('_has-close-button');
        closeButton = document.createElement('div');
        closeButton.classList.add('alert-close-button');
        const closeIcon = document.createElement('div');
        closeIcon.setAttribute('icon-data', 'iconCloseLarge');
        closeButton.append(closeIcon);
        alert.append(closeButton);
    }

    if (content) {
        const alertContent = document.createElement('div');
        alertContent.classList.add('alert-content');

        if (options.heading) {
            const headingContent = document.createElement('div');
            headingContent.classList.add('heading');
            headingContent.innerHTML = options.heading;
            alertContent.append(headingContent);
        }

        const body = document.createElement('div');
        body.classList.add('alert-content');
        body.innerHTML = content;
        alertContent.append(body);
        alert.append(alertContent);
    }

    alertContainer.append(alert);

    $('#alertBox').append(alertContainer);

    if (options.autoClose) {
        timer = setTimeout(function () {
            alertContainer.style.opacity = "0";

            setTimeout(function () {
                $(closeButton).unbind();

                alert.remove();
            }, 600);
        }, options.closeTime ? options.closeTime : 3000);
    }

    $(closeButton).one('click', function (event) {
        event.stopPropagation();

        if (!!timer) {
            clearTimeout(timer);
        }

        alertContainer.style.opacity = "0";

        setTimeout(function () {
            alert.remove();
        }, 600);
    });

    // closeButton.addEventListener('click', function(event) {
    //     event.stopPropagation();

    //     if (!!timer) {
    //         clearTimeout(timer);
    //     }

    //     alertContainer.style.opacity = "0";

    //     setTimeout(function() {
    //         alert.remove();
    //     }, 600);
    // }, {
    //     once: true
    // })

    createIcons();
}

function dinamicCreateAlerts(content, type, options = {}) {
    if (!options.autoClose) {
        options.autoClose = false;
    }

    if (!options.closeTime) {
        options.closeTime = 5000;
    }

    if (!options.showCloseButton) {
        options.showCloseButton = true;
    }

    const alert = document.createElement('div');

    alert.classList.add('alert');

    if (typeof type !== 'string') {
        console.error('type must be string');

        return false;
    }

    alert.classList.add(type);

    const close = document.createElement('span');

    close.classList.add('closebtn');

    if (options.showCloseButton) {
        close.innerHTML = '&times;';
    }

    alert.append(close);

    if (content) {
        const contentHTML = document.createElement('div');

        contentHTML.classList.add('mui-text_body-s');

        contentHTML.innerHTML = content

        alert.append(contentHTML);
    }

    document.getElementById('alertBox').append(alert);

    let timer;

    if (options.autoClose) {
        timer = setTimeout(function () {
            alert.remove();
        }, options.closeTime ? options.closeTime : 3000);
    }

    close.addEventListener('click', () => {
        if (!!timer) {
            clearTimeout(timer);
        }

        alert.style.opacity = "0";

        setTimeout(function () {
            alert.remove();
        }, 600);

    }, {
        once: true
    });
}


function showNotification(result, options = {}) {
    let func = 'dinamicCreateAlerts';

    if (options.style === undefined) {
        options.style = 'Mui';

        func += options.style;
    }

    window[func](result.text, result.type, result.options);
}


function randomIdGenerate() {
    return Math.random().toString(36).substr(2, 9);
}

function showPopupEdit(data = {}) {
    if (!data.id) {
        data.id = "input_" + randomIdGenerate();
    }

    // TODO: удалить после оптимизации всех изменений
    console.log(data);

    let html = `
        <div class="mui-space_bottom-5">
            <input mui-flex-input mui-flex-color="light" data-overview="${data.overview_text}" data-placeholder="${data.placeholder}" id="${data.id}" ${data.required ? 'require' : ''} data-error-text="${data.error_text ? data.error_text : ''}">
        </div>`;

    const popup = $('#popup_edit');

    popup.css('display', 'flex');

    const close = popup.children().find('.close');
    const cancelButton = popup.children().find('button[data-property="cancel"]');
    const submitButton = popup.children().find('button[data-property="submit"]');

    const modalBody = popup.children().find('.modal-body');
    const modalContent = popup.children('.modal-content');

    modalBody.empty();
    modalBody.append(html);

    $(modalContent).on('click', function (event) {
        event.stopPropagation();
    });

    createMuiInput();


    const buttonSubmitClick = function (event) {
        if (event) {
            event.stopPropagation();
        }

        let postData = null;

        if (data.submit_command === 'direction') {

            if (data.method === 'edit') {
                postData = {
                    command: data.submit_command,
                    newValue: input.val(),
                    direction_name: data.value,
                    method: data.method
                }
            }

            if (data.method === 'edit_assignee') {
                postData = {
                    command: data.submit_command,
                    assignee: input.val(),
                    direction_name: data.direction,
                    method: data.method
                }
            }
        }

        if (data.submit_command === 'product') {

            if (data.method === 'edit') {
                postData = {
                    command: data.submit_command,
                    newValue: input.val(),
                    product_name: data.value,
                    direction_name: apiConfig.getDirectionByProductName(data.value).name,
                    method: data.method
                }
            }

            if (data.method === 'edit_assignee') {
                const direction = apiConfig.getDirectionByProductName(data.product);

                postData = {
                    command: data.submit_command,
                    assignee: input.val(),
                    product_name: data.product,
                    direction_name: direction ? direction.name : '',
                    method: data.method,
                    param_name: 'Другое'
                }
            }
        }

        if (data.submit_command === 'param') {

        }

        if (postData) {
            console.log(postData);


            apiConfig.postDataToWritter(postData, function (result) {
                if (result) {
                    try {
                        showNotification(JSON.parse(result));
                    } catch (error) {
                        console.error(error);

                        console.warn(result);

                        if (error) {
                            dinamicCreateAlertsMui(error, 'error', {
                                autoClose: true
                            });
                        }
                    }
                }

                apiConfig.getJsonData(preloadDataFromJson);

                submitButton.unbind();

                closePopup();
            });
        }
    }

    const closePopup = function () {
        popup.hide();

        close.unbind();
        submitButton.unbind();
        popup.unbind();

        cancelButton.unbind();
    }

    close.on('click', closePopup);
    cancelButton.on('click', closePopup);

    const input = $('#' + data.id);

    input.trigger('focus');
    input.val(data.value);

    if (input.val() === data.value) {
        submitButton.prop('disabled', true);
    }

    input.on('input', function () {
        if ($(this).val() !== data.value) {
            submitButton.prop('disabled', false);
        } else {
            submitButton.prop('disabled', true);
        }
    });

    popup.on('click', closePopup);
    $(submitButton).on('click', buttonSubmitClick);

}

function showPopupDelete(data = {}) {
    // TODO: удалить после оптимизации
    console.log(data);

    function closePopup(event) {
        if (event) {
            event.stopPropagation();
        }

        title.remove();
        icon.remove();


        $(popup).hide();

        $(close).unbind();
        $(modalContent).unbind()
        $(popup).unbind()
        $(cancel_button).unbind()
        $(delete_button).unbind()
    }

    const deleteFunction = function () {
        let postData = null;

        if (data.submit_command === 'product') {
            postData = {
                command: data.submit_command,
                method: 'delete',
                product_name: data.product_name,
                direction_name: data.direction_name,
            }
        }

        if (data.submit_command === 'param') {
            postData = {
                command: data.submit_command,
                method: 'delete',
                product_name: data.product_name,
                direction_name: data.direction_name,
                param_name: data.param_name
            }
        }

        if (postData) {
            console.log(postData);


            apiConfig.postDataToWritter(postData, function (result) {
                if (result) {
                    showNotification(JSON.parse(result));
                }
                closePopup();

                apiConfig.getJsonData(preloadDataFromJson);
            });
        } else {
            showNotification({
                text: 'Неверно переданы параметры submit_command : ' + data.submit_command,
                type: 'error',
                options: {
                    autoClose: true
                }
            })
        }
    }

    const popup = document.getElementById('popup_delete');
    const close = popup.querySelector('.close');
    const modalContent = popup.querySelector('.modal-content');
    const delete_button = modalContent.querySelector('[data-property="delete"]');
    const cancel_button = modalContent.querySelector('[data-property="cancel"]');

    const title = document.createElement('div');
    title.classList.add('mui-text_h6', 'mui-space_bottom-5', 'flex', '_horizontal', '_center');
    title.style.textAlign = 'center';
    title.innerText = data.title ? data.title : "";

    modalContent.prepend(title);

    const icon = document.createElement('div');
    icon.classList.add('flex', '_horizontal', '_middle', '_center', 'mui-space_bottom-5');

    const markerIcon = document.createElement('div');
    markerIcon.classList.add('marker-icon', 'marker-icon-xl');

    const svgMarker = document.createElement('div');
    svgMarker.setAttribute('icon-data', 'iconInfoMarker');

    markerIcon.append(svgMarker);
    icon.append(markerIcon);

    $(modalContent).prepend(icon);

    createIcons();

    popup.style.display = "flex";

    $(modalContent).on('click', function (event) {
        event.stopPropagation();
    });

    $(popup).on('click', closePopup);
    $(cancel_button).on('click', closePopup);
    $(delete_button).on('click', deleteFunction);
    $(close).on('click', closePopup);
}

function showPopup_addNewDirection(event) {
    const addNewDirectionFunction = function () {
        const directionName = $(modalBody).children().find('#input_addNewDirectionName').val();
        const directionAssignee = $(modalBody).children().find('#input_addNewDirectionAssignee').val();

        if (directionName !== '' && directionAssignee !== '') {
            apiConfig.postDataToWritter({
                direction_name: directionName,
                command: 'direction',
                assignee: directionAssignee,
            }, function (result) {
                showNotification(JSON.parse(result));

                closePopup();

                apiConfig.getJsonData(preloadDataFromJson);
            });
        } else {
            showNotification({
                text: 'Не все обязательные поля заполнены!',
                type: 'error',
                options: {
                    autoClose: true
                }
            });

            $(modalBody).children().find('#input_addNewDirectionName').trigger('blur');
            $(modalBody).children().find('#input_addNewDirectionAssignee').trigger('blur');
        }
    }

    const closePopup = function () {
        modal.removeEventListener('click', closePopup);
        close.removeEventListener('click', closePopup);
        cancelButton.removeEventListener('click', closePopup);
        addButton.removeEventListener('click', addNewDirectionFunction);

        $(modalBody).empty();
        $(modal).hide();
    }

    const loader = createLoader();
    const target = event.target;
    const id = $(target).attr('id');
    const modal = document.getElementById('popup_' + id);
    const modalContent = modal.querySelector('.modal-content');
    const modalBody = modal.querySelector('.modal-body');
    const close = modalContent.querySelector('.close');
    const cancelButton = modalContent.querySelector('button[data-property="cancel"]');
    const addButton = modalContent.querySelector('button[data-property="add"]');

    modal.style.display = 'flex';

    $(modalBody).html(loader);

    $.ajax({
        url: './html/add-new-direction.template.html',
        method: 'get',
        success: function (data) {
            $(modalBody).html(data);

            createMuiInput();
        },
        error: function (error) {
            dinamicCreateAlerts(error.statusText, 'error', {
                autoClose: true
            });

            $(modalBody).html(error.statusText);
        }
    });

    modalContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    modal.addEventListener('click', closePopup);
    close.addEventListener('click', closePopup);
    cancelButton.addEventListener('click', closePopup);
    addButton.addEventListener('click', addNewDirectionFunction);
}

function showPopup_addNewProduct(event) {
    const loader = createLoader();
    const target = event.target;
    const id = $(target).attr('id');
    const modal = document.getElementById('popup_' + id);
    const modalContent = modal.querySelector('.modal-content');
    const modalBody = modal.querySelector('.modal-body');
    const close = modalContent.querySelector('.close');
    const cancelButton = modalContent.querySelector('button[data-property="cancel"]');
    const addButton = modalContent.querySelector('button[data-property="add"]');
    const selector = '#select_addNewProductDirectionList';


    let select = null;

    const addNewProduct = function () {
        const direction = $(modalBody).children().find(selector).val();
        const productName = $(modalBody).children().find('#input_addNewProductName').val();
        const productAssignee = $(modalBody).children().find('#input_addNewProductAssignee').val();

        if (direction !== '' && productName !== '' && productAssignee !== '') {
            apiConfig.postDataToWritter({
                direction_name: direction,
                command: 'product',
                product_name: productName,
                assignee: productAssignee,
            }, function (result) {
                showNotification(JSON.parse(result));

                closePopup();

                apiConfig.getJsonData(preloadDataFromJson);
            });
        } else {
            showNotification({
                text: 'Не все обязательные поля заполнены!',
                type: 'error',
                options: {
                    autoClose: true
                }
            });

            $(modalBody).children().find('#input_addNewProductName').trigger('blur');
            $(modalBody).children().find('#input_addNewProductAssignee').trigger('blur');
        }
    }

    const closePopup = function () {
        modal.removeEventListener('click', closePopup);
        close.removeEventListener('click', closePopup);
        cancelButton.removeEventListener('click', closePopup);
        addButton.removeEventListener('click', addNewProduct);

        $(modalBody).empty();
        $(modal).hide();
    }

    const afterRenderSelect = function (data) {
        let html = `<option value="">-Выберите направление-</option>`;

        for (const direction of data) {
            html += `<option value="${direction.name}">${direction.name}</option>`;
        }
        $(select).html(html);
    }

    const afterRenderModalBody = function (data) {
        $(modalBody).html(data);

        createMuiInput();

        select = modalBody.querySelector(selector);

        apiConfig.getJsonData(afterRenderSelect);
    }

    const errorRenderModalBody = function (error) {
        dinamicCreateAlerts(error.statusText, 'error', {
            autoClose: true
        });

        $(modalBody).html(error.statusText);
    }

    modal.style.display = 'flex';

    $(select).empty();

    $(modalBody).html(loader);

    $.ajax({
        url: './html/add-new-product.template.html',
        method: 'get',
        success: afterRenderModalBody,
        error: errorRenderModalBody
    });

    modalContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    modal.addEventListener('click', closePopup);
    close.addEventListener('click', closePopup);
    cancelButton.addEventListener('click', closePopup);
    addButton.addEventListener('click', addNewProduct);
}

function showPopup_addNewReason(event) {
    const addNewReason = function () {
        const direction = $(modalBody).children().find(selectorDirection).val();
        const product = $(modalBody).children().find(selectorProduct).val();
        const reasonName = $(modalBody).children().find('#input_addNewReasonName').val();
        const reasonAssignee = $(modalBody).children().find('#input_addNewReasonAssignee').val();
        const reasonType = $(modalBody).children().find('#select_addNewReasonTypeList').val();
        const isException = $(modalBody).children().find('[type="checkbox"]').is(':checked');
        const reasonsTags = $(modalBody).children().find('#input_addNewReasonTags').val();

        if (direction !== '' && product !== '' && reasonName !== '' && reasonAssignee !== '' && reasonType !== '') {
            apiConfig.postDataToWritter({
                direction_name: direction,
                command: 'param',
                product_name: product,
                assignee: reasonAssignee,
                param_name: reasonName,
                type: reasonType,
                tags: reasonsTags ? reasonsTags.split(', ') : [],
            }, function (result) {
                try {
                    showNotification(JSON.parse(result));

                    closePopup();

                    apiConfig.getJsonData(preloadDataFromJson);
                } catch (error) {
                    showNotification({
                        text: error,
                        type: 'error',
                        options: {
                            autoClose: true
                        }
                    });
                }
            });
        } else {
            showNotification({
                text: 'Не все обязательные поля заполнены!',
                type: 'error',
                options: {
                    autoClose: true
                }
            });

            $(modalBody).children().find('#input_addNewReasonName').trigger('blur');
            $(modalBody).children().find('#input_addNewReasonAssignee').trigger('blur');
        }
    }

    const closePopup = function () {
        $(modal).unbind();
        $(close).unbind();
        $(cancelButton).unbind();
        $(addButton).unbind();
        $(selectDirection).unbind();

        $(modalBody).empty();
        $(modal).hide();
    }

    const loader = createLoader();
    const target = event.target;
    const id = $(target).attr('id');
    const modal = document.getElementById('popup_' + id);
    const modalContent = modal.querySelector('.modal-content');
    const modalBody = modal.querySelector('.modal-body');
    const close = modalContent.querySelector('.close');
    const cancelButton = modalContent.querySelector('button[data-property="cancel"]');
    const addButton = modalContent.querySelector('button[data-property="add"]');
    const selectorDirection = '#select_addNewReasonDirectionList';
    const selectorProduct = '#select_addNewReasonProductList';

    let selectDirection = null;
    let selectProduct = null;

    $(modal).css('display', 'flex');

    $(selectDirection).empty()
    $(selectProduct).empty()
    $(modalBody).html(loader);

    const afterSelectChange = function (event) {
        $(selectProduct).html(`<option value="">-Выберите продукт-</option>`);

        let html = '<option value="">-Выберите продукт-</option>';

        const selectorDirectionValue = $(event.target).val();
        const direction = apiConfig.getDirectionByName(selectorDirectionValue);
        const productList = apiConfig.getProductsDirection(direction);

        if (!selectorDirectionValue || !productList.length) {

            return;
        }

        for (const product of productList) {
            html += `<option value="${product.name}">${product.name}</option>`;
        }

        $(selectProduct).html(html);
    }

    $.ajax({
        url: './html/add-new-reason.template.html',
        method: 'get',
        success: function (htmlContent) {
            $(modalBody).html(htmlContent);

            selectDirection = modalBody.querySelector(selectorDirection);
            selectProduct = modalBody.querySelector(selectorProduct);

            createMuiInput();
            createIcons();

            const directionList = apiConfig.jsonData;

            let html = `<option value="">-Выберите направление-</option>`;

            for (const direction of directionList) {
                html += `<option value="${direction.name}">${direction.name}</option>`;
            }

            $(selectDirection).html(html);

            $(selectDirection).on('input', afterSelectChange);
        },
        error: function (error) {
            showNotification({
                text: error,
                type: 'error',
                options: {
                    autoClose: true
                }
            });
        }
    });

    $(modalContent).on('click', function (event) {
        event.stopPropagation();
    });

    $(modal).on('click', closePopup);
    $(close).on('click', closePopup);
    $(cancelButton).on('click', closePopup);
    $(addButton).on('click', addNewReason);
}


function createPopupContent() {

    const formGroup = document.createElement('form');

    formGroup.classList.add('flex', '_vertical');


}

function dropListRender(options = {}) {
    let icon = null;
    let list = null;

    if (options.icon) {
        icon = `<div icon-data="${options.icon}"></div>`;
    }

    if (options.items.length) {
        list = ``;

        for (const item of options.items) {
            const stopPropagation = item.stopPropagation ? 'event.stopPropagation();' : '';

            list += `
                <a id="${item.id}" onclick="${stopPropagation}" class="dropdown-item">
                    ${item.caption}
                </a>`;
        }
    }

    const droplistWithOptions = `
        <div class="flex _horizontal _middle _end">
            <button onclick="showDropDownList('${options.id}'); event.stopPropagation();" class="mui-button-s dropbtn">
                ${icon ? icon : ''}
                <div id="${options.id}" class="dropdown-content">
                    ${list ? list : ''}
                </div>
            </button>
        </div>`;

    return droplistWithOptions;
}

const editFormConfig = {
    directionInfoTableRender: (table, direction) => {
        console.debug('directionInfoTableRender start');

        const assignee = apiConfig.getAssignee(direction);

        const directionTableinfoData = {
            rows: [{
                    options: {
                        classList: ['tui-table__tr', 'tui-table__tr_hover_disabled']
                    },
                    columns: [{
                        type: 'th',
                        content: 'Имя',
                        options: {
                            classList: ['tui-table__th tui-table__th_font-size_l'],
                        }
                    }, {
                        type: 'th',
                        content: 'Ответственный',
                        options: {
                            classList: ['tui-table__th tui-table__th_font-size_l'],
                        }
                    }]
                },
                {
                    options: {
                        classList: ['tui-table__tr']
                    },
                    columns: [{
                        type: 'td',
                        content: direction.name,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }, {
                        type: 'td',
                        content: assignee,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }]
                }
            ]
        };

        $(table).html(tableRender.render(directionTableinfoData));

        createIcons();
    },

    productInfoTableRender: (table, product) => {
        let assignee = null;

        if (product.name === 'Другое') {
            assignee = product.assignee
        } else {
            assignee = apiConfig.getProductAssignee(product);
        }

        const tableData = {
            rows: [{
                    options: {
                        classList: ['tui-table__tr', 'tui-table__tr_hover_disabled']
                    },
                    columns: [{
                        type: 'th',
                        content: 'Имя',
                        options: {
                            classList: ['tui-table__th tui-table__th_font-size_l'],
                        }
                    }, {
                        type: 'th',
                        content: 'Ответственный',
                        options: {
                            classList: ['tui-table__th tui-table__th_font-size_l'],
                        }
                    }]
                },
                {
                    options: {
                        classList: ['tui-table__tr']
                    },
                    columns: [{
                        type: 'td',
                        content: product ? product.name : null,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }, {
                        type: 'td',
                        content: assignee,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }]
                }
            ]
        };

        $(table).html(tableRender.render(tableData));
        createIcons();
    },

    paramIngoTableRender: (table, param) => {
        if (!param) {
            console.error('param is ' + param);

            return false;
        }

        const paramsTableData = {
            rows: [{
                    options: {
                        classList: ['tui-table__tr', 'tui-table__tr_hover_disabled']
                    },
                    columns: [{
                            type: 'th',
                            content: 'Имя',
                            options: {
                                classList: ['tui-table__th tui-table__th_font-size_l'],
                            }
                        }, {
                            type: 'th',
                            content: 'Ответственный',
                            options: {
                                classList: ['tui-table__th tui-table__th_font-size_l'],
                            }
                        },
                        {
                            type: 'th',
                            content: 'Тип',
                            options: {
                                classList: ['tui-table__th tui-table__th_font-size_l'],
                            }
                        },
                        {
                            type: 'th',
                            content: 'Теги',
                            options: {
                                classList: ['tui-table__th tui-table__th_font-size_l'],
                            }
                        }
                    ]
                },
                {
                    options: {
                        classList: ['tui-table__tr']
                    },
                    columns: [{
                        type: 'td',
                        content: param.name,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }, {
                        type: 'td',
                        content: param.assignee,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }, {
                        type: 'td',
                        content: param.type,
                        options: {
                            classList: ['tui-table__td']
                        }
                    }, {
                        type: 'td',
                        content: param.tags && param.tags.length ? param.tags.join(',\n\n') : 'Теги не указаны',
                        options: {
                            classList: ['tui-table__td']
                        }
                    }]
                }
            ]
        };

        $(table).html(tableRender.render(paramsTableData));

        $('#paramEditAssigneeList_delete').on('click', function () {
            showPopupDelete({
                submit_command: 'param',
                direction_name: $('#select_directionEditDirectionList').val(),
                product_name: $('#select_directionEditProductList').val(),
                param_name: param.name,
                method: 'delete',

            })
        });
        $('#paramEditNameList_delete').on('click', function () {
            showPopupDelete({
                submit_command: 'param',
                direction_name: $('#select_directionEditDirectionList').val(),
                product_name: $('#select_directionEditProductList').val(),
                param_name: param.name,
                title: 'Удалить тематику ' + param.name + ' у продукта ' + $('#select_directionEditProductList').val() + ' внутри направления ' + $('#select_directionEditDirectionList').val() + '?'
            })
        });

        $('#paramEditAssigneeList_edit').on('click', function () {
            showPopupEdit({
                placeholder: 'Введите логин сотрудника',
                overview_text: 'Ответственный',
                value: param.assignee,
                direction_name: $('#select_directionEditDirectionList').val(),
                product_name: $('#select_directionEditProductList').val(),
                required: true,
                submit_command: 'param',
                method: 'edit_assignee',
            });
        });

        $('#paramEditNameList_edit').on('click', function () {
            showPopupEdit({
                placeholder: 'Введите название тематики',
                overview_text: 'Тематика',
                param_name: param.name,
                direction_name: $('#select_directionEditDirectionList').val(),
                product_name: $('#select_directionEditProductList').val(),
                required: true,
                submit_command: 'param',
                method: 'edit',
                value: param.name,
            });
        });



        createIcons();
    },

    getListFromData: (dataArray, selector, type) => {
        let html = `<option value="">-Выберите ${type}-</option>`;

        for (const element of dataArray) {
            html += `<option value="${element.name}">${element.name}</option>`;
        }

        $(selector).html(html);
    },
};



function editForm() {
    const selectorDirectionList = '#select_directionEditDirectionList';
    const selectorProductList = '#select_directionEditProductList';
    const selectorParamList = '#select_directionEditParamList';

    const selectDirectionList = document.querySelector(selectorDirectionList);
    const selectProductList = document.querySelector(selectorProductList);
    const selectParamList = document.querySelector(selectorParamList);

    const tableDirectionInfo = document.querySelector('#directionInfo>tbody');;
    const tableProductInfo = document.querySelector('#productInfo>tbody');
    const tableParamInfo = document.querySelector('#paramInfo>tbody');

    $(selectDirectionList).empty();
    $(selectProductList).empty();


    $(tableParamInfo).empty();
    $(tableProductInfo).empty();
    $(tableDirectionInfo).empty();

    $(selectProductList).hide();
    $(selectParamList).hide();

    const selectParamListEvent = function (params) {
        return function () {
            const param = params.find(param => param.name === this.value);

            if (this.value) {
                editFormConfig.paramIngoTableRender(tableParamInfo, param);
            } else {
                $(tableParamInfo).empty();
            }
        }
    }

    const selectProductListEvent = function (direction) {
        return function () {
            $(selectParamList).unbind();

            $(selectParamList).hide();

            $(tableParamInfo).empty();
            $(tableProductInfo).empty();

            if ($(this).val()) {

                console.log($(this).val());

                const product = apiConfig.getProductByNameFromDirection(direction, $(this).val().trim());

                const params = apiConfig.getParamListFromProduct(product);

                editFormConfig.productInfoTableRender(tableProductInfo, product);

                if (params.length) {
                    editFormConfig.getListFromData(params, selectorParamList, 'тематику');

                    $(selectParamList).show();
                    $(selectParamList).on('input', selectParamListEvent(params));
                } else {
                    $(tableParamInfo).html('<tr class="tui-table__tr"><th class="tui-table__th tui-table__th_font-size_l">У данного продукта пока еще нет тематик</th></tr>');
                }
            }
        }
    }

    const selectDirectionListEvent = function () {
        $(selectParamList).unbind();
        $(selectProductList).unbind();

        $(selectParamList).hide();
        $(selectProductList).hide();

        $(tableParamInfo).empty();
        $(tableProductInfo).empty();
        $(tableDirectionInfo).empty();

        if (this.value) {
            const direction = apiConfig.getDirectionByName(this.value);
            const products = apiConfig.getProductsDirection(direction);

            editFormConfig.directionInfoTableRender(tableDirectionInfo, direction);

            if (products.length) {
                editFormConfig.getListFromData(products, selectProductList, 'продукт');

                $(selectProductList).show();
                $(selectProductList).on('input', selectProductListEvent(direction));
            } else {
                $(tableProductInfo).html('<tr class="tui-table__tr"><th class="tui-table__th tui-table__th_font-size_l">У данного направления пока еще нет продуктов</th></tr>');
            }
        }
    }

    editFormConfig.getListFromData(apiConfig.jsonData, selectDirectionList, 'направление');

    $(selectDirectionList).on('input', selectDirectionListEvent);
}

function preloadDataFromJson(data) {
    apiConfig.jsonData = data;

    statisticRender();
    editForm();
}

function startPage() {
    apiConfig.getJsonData(preloadDataFromJson);

    document.getElementById('addNewDirection').addEventListener('click', function (event) {
        window['showPopup_' + $(event.target).attr('id')](event);
    });

    document.getElementById('addNewProduct').addEventListener('click', function (event) {
        window['showPopup_' + $(event.target).attr('id')](event);
    });

    document.getElementById('addNewReason').addEventListener('click', function (event) {
        window['showPopup_' + $(event.target).attr('id')](event);
    });

}

const apiConfig = {

    // Свойства

    jsonData: [],

    mode: 'admin',

    urlData: {
        test: '/departments/processes/test/m.v.grigoryev/monitoring/admin-page/json/feedbackData.json',
        prod: '/departments/processes/test/m.v.grigoryev/monitoring/admin-page/json/feedbackData.json'
    },

    prod: false,

    writer: {
        prod: '/departments/processes/test/m.v.grigoryev/monitoring/admin-page/php/writerProd.php',
        test: '/departments/processes/test/m.v.grigoryev/monitoring/admin-page/php/writerTest.php'
    },

    // Методы

    // getPromise: () => {
    //      await fetch('/departments/processes/test/m.v.grigoryev/monitoring/admin-page/json/feedbackData.json')

    //     await fetch('/departments/processes/test/m.v.grigoryev/monitoring/admin-page/json/feedbackData.json').then(response => {
    //         if (response.ok) {

    //         } else {

    //         }
    //     })
    // },

    getJsonData: (callback) => {
        const url = apiConfig.prod ?
            apiConfig.urlData.prod :
            apiConfig.urlData.test;

        $.ajax({
            method: "GET",
            url: url,
            success: function (responce) {
                callback(responce);
            },
            error: function (error) {
                showNotification({
                    text: error,
                    type: 'error'
                });

                console.error(error);
            }
        });
    },

    getProductsDirection: (direction, options = {}) => {
        let products = null;

        if (direction.products) {
            products = direction.products;
        }

        const productsArray = [];

        if (!options.showOther) {
            options.showOther = false;
        }

        if (!products) {
            console.error('direction has not products');

            return;
        }

        for (const product of products) {
            const unfoundProduct = productsArray.find(element => element.name === product.name) === undefined;

            if (options.showOther) {
                productsArray.push(product);
            } else {
                if (product.name !== 'Другое' && unfoundProduct) {
                    productsArray.push(product);
                }
            }
        }

        return productsArray;
    },


    getDirectionByProductName: function (productName) {
        let element = null;

        apiConfig.jsonData.forEach(direction => {
            if (direction.products) {

                direction.products.forEach(product => {
                    if (product.name === productName) {
                        element = direction;
                    }
                });
            }
        });

        return element;
    },

    getProductAssignee: (product) => {
        if (!product) {
            return null;
        }

        if (product.params) {
            let param = product.params.find(param => param.name === 'Другое');

            if (param && param.assignee) {
                return param.assignee;
            }
        }
    },

    getReasonsDirection: (direction) => {
        const products = direction.products;

        const paramsArray = [];

        if (!products) {
            console.error('direction has not products');

            return;
        }

        for (const product of products) {
            const params = product.params;

            if (params) {
                for (const param of params) {

                    const unfoundParam = paramsArray.find(element => element.name === param.name) === undefined;

                    if (param.name !== 'Другое' && unfoundParam) {
                        paramsArray.push(param);
                    }
                }
            }
        }

        return paramsArray;
    },

    searchJiraIssuesCustom: (projectKey, jql, callback) => {
        if (typeof jql !== 'string') {
            console.error('JQL must be a string');

            return false;
        }

        if (typeof projectKey !== 'string') {
            console.error('Project must be a string');

            return false;
        }

        $.ajax({
            url: `/new/api/jira/search?jql=${encodeURIComponent(jql)}&projectKey=${projectKey}`,
            method: "GET",
            success: function (respounce) {
                callback(respounce);
            }
        });
    },

    postDataToWritter: (data, callback) => {
        const url = apiConfig.prod ? apiConfig.writer.prod : apiConfig.writer.test;

        $.post(url, data, function (response) {
            callback(response);
        });
    },

    getAssignee: (object) => {
        let assignee = null;

        if (object.products) {
            assignee = object.products.find(el => el.name == "Другое").assignee;
            if (assignee) {
                return assignee;
            }
        }

        return assignee;
    },

    getParamListFromProduct: function (product) {
        let paramsArray = [];

        if (product.params) {
            product.params.forEach(param => {
                if (param.name !== 'Другое') {
                    paramsArray.push(param);
                }
            });
        }

        return paramsArray;
    },

    getParamAssignee: function (param) {
        return param.assignee ? param.assignee : 'jirman';
    },

    directionListSelect: (array) => {
        let html = '';

        html += `<option value="">-Выберите направление-</option>`;

        for (const i of array) {
            html += `<option value="${i.name}">${i.name}</option>`;
        }

        return html;
    },

    getDirectionByName(name) {
        return this.jsonData.find(direction => direction.name === name);
    },

    getProductByNameFromDirection(direction, name) {
        let element = null;

        if (direction.products) {
            direction.products.find(product => {
                if (product.name === name) {
                    element = product;
                }
            })
        }

        return element;
    }
}

$(function () {
    startPage();
});


// var selector = $('#myTable>tbody');

// var element = null;

// apiConfig.jsonData.forEach(el => {

//     if (el.products) {

//         el.products.find(product => {
//             if (product.name === 'ИИС') {
//                 element = product;
//             }
//         })
//     }
// })

// var html = '';

// html += `<tr class="tui-table__tr">
//             <th class="tui-table__th">Название</th>
//             <th class="tui-table__th">Ответственный</th>
//             <th class="tui-table__th">Тип</th>
//             <th class="tui-table__th">Уникальный</th>
//             <th class="tui-table__th">Указывать продукт</th>
//             <th class="tui-table__th">Теги</th>
//             <th class="tui-table__th"></th>
//         </tr>`;

// for (const i of element.params) {
//     html += `
//          <tr class="tui-table__tr">
//             <td class="tui-table__td tui-table__td_align_center">${i.name}</td>
//             <td class="tui-table__td tui-table__td_align_center">${i.assignee}</td>
//             <td class="tui-table__td tui-table__td_align_center">${i.type}</td>
//             <td class="tui-table__td tui-table__td_align_center">Нет</td>
//             <td class="tui-table__td tui-table__td_align_center">Нет</td>
//             <td class="tui-table__td tui-table__td_align_center">${i.tags ? i.tags.join(', ') : 'Теги не указаны'}</td>
//             <td class="tui-table__td tui-table__td_align_center">
//                  <div class="flex _horizontal _end">
//                             <button onclick="showDropDownList(''); event.stopPropagation();" class="mui-button-s dropbtn">
//                                 <div icon-data="iconMoreVertLarge"></div>
//                                 <div id="paramInfo" class="dropdown-content">
//                                     <a id="" onclick="" class="dropdown-item">
//                                         Изменить
//                                     </a>
//                                     <a id="" onclick="" class="dropdown-item">
//                                         Удалить
//                                     </a>
//                                 </div>
//                             </button>
//                         </div>
//             </td>
//         </tr>`;

// }

// selector.html(html);
// createIcons();


const locationArray = window.document.location.href.split('/');
const page = locationArray[locationArray.length - 1];

function createIcons() {
    $('[icon-data="iconSettingsLarge"]').empty();
    $('[icon-data="iconSettingsLarge"]').html(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false">
            <path fill="currentColor" d="M20.3 8.7c.1.2.3.3.5.3h.2c1.7 0 3 1.3 3 3s-1.3 3-3 3h-.1c-.3 0-.5.2-.6.4-.1.2-.1.5.1.7l.1.1c1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0l-.1-.1c-.2-.2-.5-.2-.7-.1-.2.1-.4.3-.4.6v.2c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.3-.2-.6-.5-.7-.2-.1-.5-.1-.7.1l-.1.1c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2l.1-.1c.2-.2.2-.5.1-.7-.1-.2-.3-.4-.6-.4H3c-1.7 0-3-1.3-3-3s1.3-3 3-3c.3 0 .6-.2.7-.5.1-.2.1-.5-.1-.7l-.1-.1c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0l.1.1c.2.1.5.2.7.1.1 0 .1 0 .2-.1.2-.1.3-.3.3-.5V3c0-1.7 1.3-3 3-3s3 1.3 3 3v.1c0 .3.2.5.4.6.2.1.5.1.7-.1l.1-.1c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-.1.1c-.2.2-.2.5-.1.7.1.1.1.1.1.2zm-11.2-3c-1 .3-2 .1-2.7-.6L6.3 5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.1.1c.8.8 1 1.9.6 2.9s-1.4 1.7-2.4 1.7H3c-.6 0-1 .4-1 1s.4 1 1 1h.2c1.1 0 2 .6 2.4 1.6.4 1 .2 2.2-.5 2.9l-.1.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l.1-.1c.8-.8 1.9-1 2.9-.6s1.7 1.4 1.7 2.4v.2c0 .6.4 1 1 1s1-.4 1-1v-.2c0-1.1.6-2 1.6-2.4 1-.4 2.2-.2 2.9.5l.1.1c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.1-.1c-.8-.8-1-1.9-.5-2.9.4-1 1.4-1.6 2.4-1.6h.1c.6 0 1-.4 1-1s-.4-1-1-1h-.2c-1.1 0-2-.6-2.4-1.6 0-.1-.1-.2-.1-.3-.3-1-.1-2 .6-2.7l.1-.1c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-.1.1c-.8.8-1.9 1-2.9.5-1-.4-1.6-1.4-1.6-2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v.2c0 1.1-.6 2-1.6 2.4-.1 0-.2.1-.3.1zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </svg>`);

    $('[icon-data="iconCheckboxLarge"]').empty();
    $('[icon-data="iconCheckboxLarge"]').html(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" class="hidden">
            <path d="M16.3 8.3L10 14.6l-2.3-2.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L8.6 16c.8.8 2.1.8 2.8 0l6.3-6.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" fill="currentColor"></path>
        </svg>`);

    $('[icon-data="iconEditLarge"]').empty();
    $('[icon-data="iconEditLarge"]').html(`
        <svg _ngcontent-yoy-c6="" focusable="false" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path _ngcontent-yoy-c6="" d="M18.7 15.3v3c0 1.7-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h5l-2 2h-3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3l2-2v2zm-11 1v-4.4l8.6-8.6c.8-.8 2-.8 2.8 0l1.6 1.6c.8.8.8 2 0 2.8l-8.6 8.6H7.7zm11.6-10l-1.6-1.6-8 8v1.6h1.6l8-8z" fill="currentColor"></path>
        </svg>`);

    $('[icon-data="iconCloseLarge"]').empty();
    $('[icon-data="iconCloseLarge"]').html(`
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg" id="tuiIconCloseLgLarge">
                <svg y="50%" x="50%">
                    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4 12l4.2 4.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.2 4.2c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4.2-4.2-4.3-4.2c-.3-.4-.3-1.1 0-1.5s1-.4 1.4 0l4.2 4.2 4.2-4.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12z" fill="currentColor"></path>
                    </svg>
                </svg>
            </g>
        </svg>`);

    $('[icon-data="iconClose"]').empty();
    $('[icon-data="iconClose"]').html(`
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10.8l3-3c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-3 3 3 3c.3.3.3.9 0 1.2-.3.3-.9.3-1.2 0l-3-3-3 3c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2l3-3-3-3c-.3-.3-.3-.9 0-1.2.3-.3.9-.3 1.2 0l3 3z" fill="currentColor"></path>
        </svg>`);


    $('[icon-data="iconTooltipLarge"]').empty();
    $('[icon-data="iconTooltipLarge"]').html(`
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg" id="tuiIconTooltipLarge">
                <svg y="50%" x="50%">
                    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <circle fill="#fff" r="6" cy="12" cx="12"></circle>
                        <path d="M12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-6c0-.1 0 0 .3-.2l.2-.1c1-.5 1.5-1.3 1.5-2.6C15 8.4 13.7 7 12 7c-1.6 0-3 1-3 2.5 0 .6.4 1 1 1s1-.4 1-1c0-.2.4-.5 1-.5.5 0 1 .5 1 1.1 0 .5-.1.6-.5.8l-.2.1c-.9.5-1.3 1-1.3 2 0 .6.4 1 1 1s1-.4 1-1zm-1 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" fill="currentColor"></path>
                    </svg>
                </svg>
            </g>
        </svg>`);


    $('[icon-data="iconDeleteLarge"]').empty();
    $('[icon-data="iconDeleteLarge"]').html(`
    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg" id="tuiIconTrashFillLarge"><svg y="50%" x="50%"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 6h4V4h-4v2zM8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h3c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1h3zm-3 4.1c-.1-.6.3-1.1.9-1.1h12.2c.6 0 .9.5.9 1.1l-.8 9C18 20.7 16.6 22 15 22H9c-1.6 0-3-1.3-3.2-2.9l-.8-9z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconInfoMarker"]').empty();
    $('[icon-data="iconInfoMarker"]').html(`<svg height="48" width="48" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-24 -24)" xmlns="http://www.w3.org/2000/svg" id="tuiIconInfoMarker"><svg y="50%" x="50%"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="currentColor" d="M23.25 15a1.5 1.5 0 0 0-1.498 1.583l.584 10.5a1.5 1.5 0 0 0 1.497 1.417h.162a1.5 1.5 0 0 0 1.498-1.417l.583-10.5A1.5 1.5 0 0 0 24.58 15H23.25zm.664 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill-rule="evenodd"></path></svg></svg></g></svg>`);


    $('[icon-data="iconMoreVertLarge"]').empty();
    $('[icon-data="iconMoreVertLarge"]').html(`<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg" id="tuiIconMoreVertLarge"><svg y="50%" x="50%"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconCheckFill"]').empty();
    $('[icon-data="iconCheckFill"]').html(`<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-8 -8)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><circle fill="#fff" r="7" cy="8" cx="8"></circle><path d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zM5.7 7.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2 2c.4.4.9.4 1.3.1l4-4c.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2L7.1 8.7 5.7 7.3z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconCheckFillLarge"]').empty();
    $('[icon-data="iconCheckFillLarge"]').html(`<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="inherit" r="9" cy="12" cx="12"></circle><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.107-8.433l-2.229-1.981a1 1 0 1 0-1.328 1.495l3 2.666a1 1 0 0 0 1.432-.107l5-6a1 1 0 0 0-1.536-1.28l-4.34 5.207z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconCloseCircleFill"]').empty();
    $('[icon-data="iconCloseCircleFill"]').html(`<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-8 -8)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><circle fill="#fff" r="7" cy="8" cx="8"></circle><path d="M8 6.3l-1-1c-.5-.5-1.2-.5-1.7 0s-.4 1.3.1 1.7l1 1-1 1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l1-1 1 1c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-1-1 1-1c.5-.5.5-1.2 0-1.7s-1.4-.4-1.8.1l-1 .9zM16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconCloseCircleFillLarge"]').empty();
    $('[icon-data="iconCloseCircleFillLarge"]').html(`<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="inherit" r="9" cy="12" cx="12"></circle><path d="M13.414 12l2.293-2.293a1 1 0 1 0-1.414-1.414L12 10.586 9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconAlertCircleFillLarge"]').empty();
    $('[icon-data="iconAlertCircleFillLarge"]').html(`<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="#fff" r="9" cy="12" cx="12"></circle><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM11 8v4a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0zm.293 7.707a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconInfoFill"]').empty();
    $('[icon-data="iconInfoFill"]').html(`<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-8 -8)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16" width="16"><circle fill="inherit" r="7" cy="8" cx="8"></circle><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 6a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm1 5V8a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconAttentionFill"]').empty();
    $('[icon-data="iconAttentionFill"]').html(`<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-8 -8)" xmlns="http://www.w3.org/2000/svg"><svg y="50%" x="50%"><svg viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><circle fill="inherit" r="7" cy="8" cx="8"></circle><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7 3a1 1 0 1 0-2 0 1 1 0 1 0 2 0zm0-3V5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" fill="currentColor"></path></svg></svg></g></svg>`);


    $('[icon-data="iconInfoMarker"]').empty();
    $('[icon-data="iconInfoMarker"]').html(`<svg xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg"><g xmlns="http://www.w3.org/2000/svg" transform="translate(-24,-24)"><svg x="50%" y="50%"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M23.25 15C22.3889 15 21.7046 15.7234 21.7524 16.5832L22.3357 27.0832C22.3799 27.8781 23.0373 28.5 23.8334 28.5H23.9954C24.7915 28.5 25.449 27.8781 25.4931 27.0832L26.0764 16.5832C26.1242 15.7234 25.4399 15 24.5788 15H23.25ZM23.9144 30C23.086 30 22.4144 30.6716 22.4144 31.5C22.4144 32.3284 23.086 33 23.9144 33C24.7428 33 25.4144 32.3284 25.4144 31.5C25.4144 30.6716 24.7428 30 23.9144 30Z" fill="currentColor"></path></svg></svg></g></svg>`);



}

$(function () {
    createIcons();
    getContent('Редактирование');
})


function getContent(link) {
    let path = '';

    switch (link) {
        case 'Добавить направление':
            path = './pages/list.html';
            break;
        case 'Добавить продукт':
            path = './pages/froms.html';
            break;

        case 'Редактирование':
            path = './pages/edit-page.html';
    }

    if (path) {
        $.ajax({
            url: path,
            method: 'get',
            success: function (respounce) {
                $('#content').empty();
                $('#content').html(respounce);
            }

        });
    }
}

function renderIcons(type) {
    if (type === 'closeLarge') {
        return `
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-12 -12)" xmlns="http://www.w3.org/2000/svg" id="tuiIconCloseLgLarge"><svg y="50%" x="50%"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 12l4.2 4.2c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-4.2 4.2c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4.2-4.2-4.3-4.2c-.3-.4-.3-1.1 0-1.5s1-.4 1.4 0l4.2 4.2 4.2-4.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12z" fill="currentColor"></path></svg></svg></g></svg>`.trim();
    }

}
