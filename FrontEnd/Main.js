let listDevices = $('#list-devices');

addDevice = (response) => {
    let newDevice = document.createElement('div');
    $(newDevice).addClass('card mb-2');

        let header = document.createElement('div');
        $(header).addClass('card-header');
        $(header).attr("data-toggle", "collapse");
        $(header).attr("data-target", "#collapseExample");

            let content = document.createElement('div');
            $(content).addClass('row');

                let name = document.createElement('div');
                $(name).addClass('col-3');
                $(name).text(response.name);

                $(content).append(name);

            $(header).append(content);

        let collapse = document.createElement('div');
        $(collapse).addClass('collapse');
        $(collapse).attr("id", "collapseExample");

            let body = document.createElement('div');
            $(body).addClass('card-body p-3 text-end');

                let first_row = document.createElement('div');
                $(first_row).addClass('row mb-4');

                    let body_device_label = document.createElement('strong');
                    $(body_device_label).addClass('col-1 align-self-center');
                    $(body_device_label).text('Device');
                    let body_device = document.createElement('div');
                    $(body_device).addClass('col-3');
                    $(body_device).html('<input class="form-control" disabled>');
                    $(body_device).children().val(response.device);

                    let body_name_label = document.createElement('strong');
                    $(body_name_label).addClass('col-1 align-self-center');
                    $(body_name_label).text('Name');
                    let body_name = document.createElement('div');
                    $(body_name).attr('id', "name-"+response.id);
                    $(body_name).addClass('col-3');
                    $(body_name).html('<input class="form-control">');
                    $(body_name).children().val(response.name);

                    let body_status_label = document.createElement('strong');
                    $(body_status_label).addClass('col-1 align-self-center');
                    $(body_status_label).text('Status');
                    let body_status = document.createElement('div');
                    $(body_status).attr('id', "status-"+response.id);
                    $(body_status).addClass('col-3');
                    $(body_status).html('' +
                        '<select class="form-select" aria-label="Select status\'s type">\n' +
'                           <option value="Down">Down</option>\n' +
'                           <option value="Up">Up</option>\n' +
'                           <option value="Warning">Warning</option>\n' +
'                           <option value="Unknown">Unknown</option>\n' +
'                       </select>');
                    $(body_status).children("select").val(response.status);

                    $(first_row).append(body_device_label);
                    $(first_row).append(body_device);
                    $(first_row).append(body_name_label);
                    $(first_row).append(body_name);
                    $(first_row).append(body_status_label);
                    $(first_row).append(body_status);

                $(body).append(first_row);

                if (response.device === "Router") {
                    let second_row = document.createElement('div');
                    $(second_row).addClass('row mb-4');

                    let body_ports_label = document.createElement('strong');
                    $(body_ports_label).addClass('col-1 align-self-center');
                    $(body_ports_label).text('Số cổng');
                    let body_ports = document.createElement('div');
                    $(body_ports).addClass('col-3');
                    $(body_ports).html('<input class="form-control" disabled>');
                    $(body_ports).children().val(response.ports.length);

                    let body_wan_label = document.createElement('strong');
                    $(body_wan_label).addClass('col-1 align-self-center');
                    $(body_wan_label).text('WAN');
                    let body_wan = document.createElement('div');
                    $(body_wan).attr('id', "wan-"+response.id);
                    $(body_wan).addClass('col-3');
                    $(body_wan).html('<input class="form-control">');
                    $(body_wan).children().val(response.wan);

                    let body_lan_label = document.createElement('strong');
                    $(body_lan_label).addClass('col-1 align-self-center');
                    $(body_lan_label).text('LAN');
                    let body_lan = document.createElement('div');
                    $(body_lan).attr('id', "lan-"+response.id);
                    $(body_lan).addClass('col-3');
                    $(body_lan).html('<input class="form-control">');
                    $(body_lan).children().val(response.lan);

                    $(second_row).append(body_ports_label);
                    $(second_row).append(body_ports);
                    $(second_row).append(body_wan_label);
                    $(second_row).append(body_wan);
                    $(second_row).append(body_lan_label);
                    $(second_row).append(body_lan);

                    $(body).append(second_row);
                }
                else if (response.device === "Switch") {
                    let second_row = document.createElement('div');
                    $(second_row).addClass('row mb-4');

                    let body_ports_label = document.createElement('strong');
                    $(body_ports_label).addClass('col-1 align-self-center');
                    $(body_ports_label).text('Số cổng');
                    let body_ports = document.createElement('div');
                    $(body_ports).addClass('col-3');
                    $(body_ports).html('<input class="form-control" disabled>');
                    $(body_ports).children().val(response.ports.length);

                    let body_lan_label = document.createElement('strong');
                    $(body_lan_label).addClass('col-1 align-self-center');
                    $(body_lan_label).text('LAN');
                    let body_lan = document.createElement('div');
                    $(body_lan).attr('id', "lan-"+response.id);
                    $(body_lan).addClass('col-3');
                    $(body_lan).html('<input class="form-control">');
                    $(body_lan).children().val(response.lan);

                    $(second_row).append(body_ports_label);
                    $(second_row).append(body_ports);
                    $(second_row).append(body_lan_label);
                    $(second_row).append(body_lan);

                    $(body).append(second_row);
                }
                else if (response.device === "PC") {
                    let second_row = document.createElement('div');
                    $(second_row).addClass('row mb-4');

                    let body_os_label = document.createElement('strong');
                    $(body_os_label).addClass('col-1 align-self-center');
                    $(body_os_label).text('Hệ ĐH');
                    let body_os = document.createElement('div');
                    $(body_os).addClass('col-3');
                    $(body_os).html('<input class="form-control" disabled>');
                    $(body_os).children().val(response.os);

                    let body_lan_label = document.createElement('strong');
                    $(body_lan_label).addClass('col-1 align-self-center');
                    $(body_lan_label).text('LAN');
                    let body_lan = document.createElement('div');
                    $(body_lan).attr('id', "lan-"+response.id);
                    $(body_lan).addClass('col-3');
                    $(body_lan).html('<input class="form-control">');
                    $(body_lan).children().val(response.lan);

                    $(second_row).append(body_os_label);
                    $(second_row).append(body_os);
                    $(second_row).append(body_lan_label);
                    $(second_row).append(body_lan);

                    $(body).append(second_row);
            }

            if (response.device === 'Switch' || response.device === 'Router') {
            let table = document.createElement('table');
            $(table).addClass('table mb-4');
            $(table).html('<thead>\n' +
                '    <tr>\n' +
                '      <th scope="col" class="text-center">Vị trí</th>\n' +
                '      <th scope="col" class="text-center">Tình trạng</th>\n' +
                '      <th scope="col" class="text-center">Sức tải tối đa</th>\n' +
                '      <th scope="col" class="text-center">Sức tải đang dùng</th>\n' +
                '      <th scope="col" class="text-center">Sức tải trung bình</th>\n' +
                '    </tr>');

                let tbody = document.createElement('tbody');
                for (let i in response.ports) {
                    let port = response.ports[i];
                    let tr = document.createElement('tr');

                        let index = document.createElement('th');
                        $(index).addClass('col-1 align-self-center text-center');
                        $(index).text(port.index);

                        let status = document.createElement('td');
                        $(status).attr('id', 'port-status-'+response.id+'-'+port.index);
                        $(status).addClass('col-2 text-center');
                        $(status).html(
                            '\n' +
                            '<label class="switch-bar">\n' +
                            '     <input type="checkbox">\n' +
                            '     <span class="slider round""></span>\n' +
                            '</label>\n'
                        );
                        $(status).children().children("input").prop('checked', port.status === "On");

                        let capacity = document.createElement('td');
                        $(capacity).attr('id', 'port-capacity-'+response.id+'-'+port.index);
                        $(capacity).addClass('col-3 text-center');
                        $(capacity).text(port.capacity+' Mbps');

                        let current = document.createElement('td');
                        $(current).attr('id', 'port-current-'+response.id+'-'+port.index);
                        $(current).addClass('col-3 text-center');
                        $(current).text(port.current+' Mbps');

                        let average = document.createElement('td');
                        $(average).attr('id', 'port-average-'+response.id+'-'+port.index);
                        $(average).addClass('col-3 text-center');
                        $(average).text(port.average+' Mbps');

                        $(tr).append(index);
                        $(tr).append(status);
                        $(tr).append(capacity);
                        $(tr).append(current);
                        $(tr).append(average);

                    $(tbody).append(tr);
                }
                $(table).append(tbody);
            $(body).append(table);
        }

            let buttonGroup = document.createElement('div');
                let edit = document.createElement('button');
                $(edit).addClass('btn btn-primary');
                $(edit).text('Edit');
                $(edit).click(() => {
                    $(edit).toggleClass('hide');
                    $(reset).toggleClass('hide');
                    $(save).toggleClass('hide');
                });
                buttonGroup.append(edit);

                let reset = document.createElement('button');
                $(reset).addClass('btn btn-secondary me-2 hide');
                $(reset).text('Reset');
                $(reset).click(() => {

                    fetch('http://127.0.0.1:5000/get_device/'+response.id, {
                        method: 'GET',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                    })
                        .then(response => response.json())
                        .then(response => {
                            for (let i in response.ports) {
                                let port = response.ports[i];
                                $('#port-status-'+response.id+'-'+port.index)
                                        .children().children("input").prop('checked', port.status === 'On');
                                $('#port-capacity-'+response.id+'-'+port.index).text(port.capacity+' Mbps');
                                $('#port-current-'+response.id+'-'+port.index).text(port.current+' Mbps');
                                $('#port-average-'+response.id+'-'+port.index).text(port.average+' Mbps');
                            }

                            $("#name-"+response.id).children().val(response.name);
                            $("#status-"+response.id).children().val(response.status);
                            $("#lan-"+response.id).children().val(response.lan);
                            $("#wan-"+response.id).children().val(response.wan);
                        })

                    $(edit).toggleClass('hide');
                    $(reset).toggleClass('hide');
                    $(save).toggleClass('hide');
                });
                buttonGroup.append(reset);

                let save = document.createElement('button');
                $(save).addClass('btn btn-primary hide');
                $(save).text('Save');
                $(save).click(() => {
                    let ports = [];
                    for (let i in response.ports) {
                        let port = response.ports[i];
                        let status = $('#port-status-'+response.id+'-'+port.index)
                                .children().children("input").prop('checked') ? "On" : "Off";
                        let capacity = $('#port-capacity-'+response.id+'-'+port.index).text();
                        capacity = capacity.substring(0, capacity.length-5);
                        let current = $('#port-current-'+response.id+'-'+port.index).text();
                        current = capacity.substring(0, current.length-5);
                        let average = $('#port-average-'+response.id+'-'+port.index).text();
                        average = average.substring(0, average.length-5);
                        let newPort = {
                            'index': port.index,
                            'status': status,
                            'capacity': capacity,
                            'current': current,
                            'average': average
                        }
                        ports.push(newPort);
                    }

                    let data = {
                        "id": response.id,
                        "name": $("#name-"+response.id).children().val(),
                        "status": $("#status-"+response.id).children().val(),
                        "lan": $("#lan-"+response.id).children().val(),
                        "wan": $("#wan-"+response.id).children().val(),
                        "ports": ports
                    };

                    fetch('http://127.0.0.1:5000/edit_device', {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })

                    console.log($(name).text(data.name));
                    $(edit).toggleClass('hide');
                    $(reset).toggleClass('hide');
                    $(save).toggleClass('hide');
                });
                buttonGroup.append(save);

            $(body).append(buttonGroup);

        $(collapse).append(body);
        $(header).click(() => {
            $(collapse).collapse('toggle');
        })

        $(newDevice).append(header);
        $(newDevice).append(collapse);

    listDevices.append(newDevice);
}

fetch('http://127.0.0.1:5000/get_devices')
    .then(response => response.json())
    .then(response => {
        if (response.hasOwnProperty('devices'))
            for (let i in response.devices)
                addDevice(response.devices[i]);
        listDevices.children().last().removeClass('mb-2');
    });

$('#device-type').change(() => {
    let type = $('#device-type').val();

    let optionals = $('.optional');
    for (let optional of optionals) {
        $(optional).addClass('hide');
    }

    if (type === 'switch') {
        optionals = document.getElementsByClassName('switch');
        for (let optional of optionals) {
            $(optional).removeClass('hide');
        }
    }
    else if (type === 'router') {
        optionals = document.getElementsByClassName('router');
        for (let optional of optionals) {
            $(optional).removeClass('hide');
        }
    }
    else if (type === 'pc') {
        optionals = document.getElementsByClassName('pc');
        for (let optional of optionals) {
            $(optional).removeClass('hide');
        }
    }
});



$('#add-device').click(() => {
    let data = {
        'device': $('#device-type').val(),
        'name': $('#name').val(),
        'ports': $('#ports').val(),
        'wan': $('#wan').val(),
        'lan': $('#lan').val(),
        'os': $('#os').val()
    }

    if (data.name === "") {
        alert('Xin hãy điền hết các mục');
        return;
    }
    if (data.device === "switch") {
        if (data.ports === "" || data.lan === "") {
            alert('Xin hãy điền hết các mục');
            return;
        }
    }
    else if (data.device === "router") {
        if (data.ports === "" || data.wan === "" || data.lan === "") {
            alert('Xin hãy điền hết các mục');
            return;
        }
    }
    else if (data.device === "pc" ) {
        if (data.os === "" || data.lan === "") {
            alert('Xin hãy điền hết các mục');
            return;
        }
    }

    fetch('http://127.0.0.1:5000/add_device', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => {
            listDevices.children().last().addClass('mb-2');
            addDevice(response);
            $('#device-type').val('other');
            $('#name').val('');
            $('#ports').val('');
            $('#wan').val('');
            $('#lan').val('');
            $('#os').val('');
            let optionals = $('.optional');
            for (let optional of optionals) {
                $(optional).addClass('hide');
            }
            listDevices.children().last().removeClass('mb-2');
        });
});

